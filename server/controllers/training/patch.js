const { DateTime } = require('luxon');
const { Training, Book, User } = require('../../models');

const addRead = async (req, res, next) => {
  try {
    const user = req.user;
    let { pages } = req.body;
    let totalPages = 0;
    totalPages += pages;

    const training = await Training.findOne({ _id: user?.training });

    if (!training) {
      return res.status(403).json({
        status: 'error',
        code: 403,
        message: 'no active training',
      });
    }

    let bookout = null;
    let pagesForTraining = 0;

    for (let i = 0; i < training.books.length; i++) {
      let book = null;

      book = await Book.findOne({ _id: training.books[i] });

      if (book?.numberOfPages === book?.readPages) {
        continue;
      }

      // book.readPages += pages;
      book.readPages += totalPages;

      if (book.readPages > book.numberOfPages) {
        book.readPages = book.numberOfPages;
      }

      totalPages = book.readPages;
      console.log(totalPages, 'pages in cycle');

      await book.save();

      bookout = book;
      pagesForTraining = totalPages;

      break;
    }

    if (!bookout) {
      await Training.deleteOne({ _id: req.user.training });

      req.user.training = null;

      await req.user.save();

      return res.status(403).json({
        status: 'error',
        code: 403,
        message: 'you read all the books from this training',
      });
    }

    const dateLuxon = DateTime.now()
      .setZone('Europe/Kiev')
      .toFormat('yyyy-LL-dd HH:mm:ss');

    const date = dateLuxon;

    pages = pagesForTraining;

    console.log(pages, 'pages out cycle');
    console.log(date, 'end test');

    training.results.push({ date, pageCount: pages });

    await training.save();

    return res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        bookout,
        training: {
          _id: training._id,
          start: training.start,
          end: training.end,
          duration: training.duration,
          pagesReadPerDay: training.pagesReadPerDay,
          books: training.books,
          results: training.results,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addRead,
};
