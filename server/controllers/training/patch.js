const { DateTime } = require('luxon');
const { Training, Book } = require('../../models');

const addRead = async (req, res, next) => {
  try {
    const user = req.user;
    let { pages } = req.body;

    const training = await Training.findOne({ _id: user?.training });

    if (!training) {
      return res.status(403).json({
        status: 'error',
        code: 403,
        message: 'no active training',
      });
    }

    let book = null;
    let totalPages = 0;

    for (let i = 0; i < training.books.length; i++) {
      const arrayBook = await Book.findOne({ _id: training.books[i] });

      if (arrayBook?.numberOfPages === arrayBook?.readPages) {
        continue;
      }

      arrayBook.readPages += pages;
      console.log(pages, 'no overflow');

      if (arrayBook.readPages > arrayBook.numberOfPages) {
        arrayBook.readPages = arrayBook.numberOfPages;
      }

      if (pages > arrayBook.readPages) {
        pages = arrayBook.readPages;
        console.log(pages, 'overflow');
      }

      const {
        _id,
        title,
        author,
        year,
        numberOfPages,
        readPages,
        review,
        rating,
      } = arrayBook;
      const validateBook = {
        _id,
        title,
        author,
        year,
        numberOfPages,
        readPages,
        review,
        rating,
      };

      await arrayBook.save();

      book = validateBook;
      totalPages = pages;

      break;
    }

    if (!book) {
      await Training.deleteOne({ _id: req.user.training });

      req.user.training = null;

      await req.user.save();

      return res.status(403).json({
        status: 'error',
        code: 403,
        message: 'you have read all the books, the training is over',
      });
    }

    const dateLuxon = DateTime.now()
      .setZone('Europe/Kiev')
      .toFormat('yyyy-LL-dd HH:mm:ss');

    const date = dateLuxon;
    pages = totalPages;

    console.log(date, 'end test');

    training.results.push({ date, pageCount: pages });

    await training.save();

    return res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        book,
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
