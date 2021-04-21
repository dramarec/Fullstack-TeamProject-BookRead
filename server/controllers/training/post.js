const { DateTime } = require('luxon');
const { Training, Book } = require('../../models');

const addTraining = async (req, res, next) => {
  try {
    const { start, end, books } = req.body;
    const user = req.user;

    const startTime = start.split('-');
    const endTime = end.split('-');
    console.log(startTime, endTime);

    const startDate = DateTime.local(
      Number(startTime[0]),
      Number(startTime[1]),
      Number(startTime[2]),
    );
    const endDate = DateTime.local(
      Number(endTime[0]),
      Number(endTime[1]),
      Number(endTime[2]),
    );

    const duration = endDate.diff(startDate, 'days').toObject().days;
    console.log(duration);

    if (!duration || duration < 1) {
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

    const pagesReadPerDay = Math.ceil(totalPages / duration);

    const createTraining = await Training.create({
      start,
      end,
      duration,
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
        duration: createTraining.duration,
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
