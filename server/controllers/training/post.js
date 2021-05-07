const { DateTime } = require('luxon');
const { Training, Book } = require('../../models');

const addTraining = async (req, res, next) => {
    try {
        const { start, end, books } = req.body;
        const user = req.user;

        const startTime = start.split('-');
        const endTime = end.split('-');
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

        if (!duration || duration < 1) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message:
                    'wrong dates, use YYYY-MM-DD format or select current date',
            });
        }

        let selectedBooks = [];
        let totalPages = 0;

        for (let i = 0; i < books.length; i++) {
            const book = await Book.findOne({ _id: books[i] });

            if (!book || !user?.books.includes(book?._id)) {
                return res.status(400).json({
                    status: 'error',
                    code: 400,
                    message: 'wrong book id',
                });
            }

            if (book.readPages === book.numberOfPages) {
                return res.status(400).json({
                    status: 'error',
                    code: 400,
                    message: "you can't add book that you've already read",
                });
            }

            totalPages += book.numberOfPages;

            const {
                _id,
                title,
                author,
                year,
                numberOfPages,
                readPages,
                review,
                rating,
            } = book;
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

            selectedBooks.push(validateBook);
        }

        const pagesReadPerDay = Math.ceil(totalPages / duration);

        const training = await Training.findOne({ _id: user?.training });

        if (training) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message: 'you have active training',
            });
        }

        const createTraining = await Training.create({
            start,
            end,
            duration,
            books,
            pagesReadPerDay,
            totalPages,
        });

        user.training = createTraining._id;

        await user.save();

        return res.status(201).json({
            status: 'success',
            code: 201,
            data: {
                _id: createTraining._id,
                start: createTraining.start,
                end: createTraining.end,
                duration: createTraining.duration,
                books: selectedBooks,
                pagesReadPerDay: createTraining.pagesReadPerDay,
                totalPages: createTraining.totalPages,
                totalReadPages: createTraining.totalReadPages,
                results: createTraining.results,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addTraining,
};
