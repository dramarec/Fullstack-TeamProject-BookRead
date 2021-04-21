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

      if (book?.numberOfPages === book?.finishedPages) {
        continue;
      }

      book.finishedPages += pages;

      if (book.finishedPages > book.numberOfPages) {
        book.finishedPages = book.numberOfPages;
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

    const date = DateTime.now().setZone('EEST');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addRead,
};
