const { DateTime } = require('luxon');
const { Training, Book } = require('../../models');

const addTraining = async (req, res, next) => {
  try {
    const { start, end, books } = req.body;
    const user = req.user;

    const startDay = start.split('-');
    const endDay = end.split('-');

    const starTime = DateTime.local(
      Number(startDay[0]),
      Number(startDay[1]),
      Number(startDay[2]),
    );
    const endTime = DateTime.local(
      Number(endDay[0]),
      Number(endDay[1]),
      Number(endDay[2]),
    );

    const period = endTime.diff(starTime, 'days').toObject().days;

    if (!period) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'wrong dates',
      });
    }

    let totalPages = 0;
    let booksCompleted = [];

    for (let i = 0; i < books.length; i++) {
      const book = await Book.findOne({ _id: books[i] });

      if (!book || !user?.books.includes(book?._id)) {
        return res.status(400).json({
          status: 'error',
          code: 400,
          message: 'wrong book id',
        });
      }

      totalPages += book.numberOfPages;
      booksCompleted.push(book);
    }

    const pagesReadPerDay = Math.ceil(totalPages / period);

    const createTraining = await Training.create({
      start,
      end,
      period,
      books,
      pagesReadPerDay,
    });

    user.training = createTraining._id;

    await user.save();

    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        start: createTraining.start,
        end: createTraining.end,
        period: createTraining.period,
        books: booksCompleted,
        pagesReadPerDay: createTraining.pagesReadPerDay,
        results: createTraining.results,
        _id: createTraining._id,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addTraining,
};
