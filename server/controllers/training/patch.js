const { DateTime } = require('luxon');
const { Training, Book } = require('../../models');

const addRead = async (req, res, next) => {
  try {
    const user = req.user;
    const { pages } = req.body;

    const training = await Training.findOne({ _id: user?.training });

    if (!training) {
      return res.status(403).json({
        status: 'error',
        code: 403,
        message: 'no active training',
      });
    }

    let book = null;

    for (let i = 0; i < training.books.length; i++) {
      book = await Book.findOne({ _id: training.books[i] });

      if (book?.numberOfPages === book?.readPages) {
        continue;
      }

      book.readPages += pages;

      if (book.readPages > book.numberOfPages) {
        book.readPages = book.numberOfPages;
      }

      await book.save();

      break;
    }

    if (!book) {
      return res.status(403).json({
        status: 'error',
        code: 403,
        message: 'you must read all the books from this training',
      });
    }

    const dateLuxon = DateTime.now().setZone('Europe/Kiev').toObject();

    const date = `${dateLuxon.year}-${dateLuxon.month}-${dateLuxon.day} ${dateLuxon.hour}:${dateLuxon.minute}:${dateLuxon.second}`;

    training.results.push({ date, pageCount: pages });

    await training.save();

    return res.status(200).json({
      status: 'success',
      code: 200,
      data: { book, training },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addRead,
};
