const { DateTime } = require('luxon');
const { Training, User } = require('../../models');

const getTraining = async (req, res, next) => {
    try {
        const user = req.user;

        console.log(`user first`, user);

        return await Training.findOne({ _id: user?.training })
            .populate('books')
            .exec(async (err, data) => {
                if (err) {
                    next(err);
                }

                if (!data) {
                    return res.status(403).json({
                        status: 'error',
                        code: 403,
                        message: 'no active training',
                    });
                }

                const dateLuxon = DateTime.now()
                    .setZone('Europe/Kiev')
                    .toFormat('yyyy-LL-dd')
                    .split('-');
                const endTime = data.end.split('-');
                const dateNow = DateTime.local(
                    Number(dateLuxon[0]),
                    Number(dateLuxon[1]),
                    Number(dateLuxon[2]),
                );
                const endDate = DateTime.local(
                    Number(endTime[0]),
                    Number(endTime[1]),
                    Number(endTime[2]),
                );
                const duration = endDate.diff(dateNow, 'days').toObject().days;

                // const newBooksList = [];

                if (!duration || duration < 1) {
                    // // console.log(`data.books`, data.books);
                    // const newUser = await User.findOne(user._id).populate(
                    //     'books',
                    // );
                    // newUser.books.forEach((item, idx) => {
                    //     // console.log(`idx`, idx);
                    //     // console.log(`item`, item);
                    //     if (item.readPages < item.numberOfPages) {
                    //         let newItem = Object.create(item);
                    //         item.readPages = 0;

                    //         newBooksList.push(newItem);
                    //     }
                    // }, newUser.books);

                    // console.log(`------------------newBooksList`);

                    // newBooksList.forEach(item => {
                    //     console.log(`item`, item);
                    // });

                    await Training.deleteOne({ _id: req.user.training });

                    req.user.training = null;

                    console.log(`user second`, user);

                    await newUser.save();

                    return res.status(403).json({
                        status: 'error',
                        code: 403,
                        message: 'training is over',
                    });
                }

                const {
                    books,
                    _id,
                    start,
                    end,
                    pagesReadPerDay,
                    totalPages,
                    totalReadPages,
                    results,
                } = data;

                let validateBooks = [];

                books.forEach(book => {
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

                    validateBooks.push(validateBook);
                });

                return res.status(200).json({
                    status: 'success',
                    code: 200,
                    training: {
                        _id,
                        start,
                        end,
                        duration,
                        pagesReadPerDay,
                        totalPages,
                        totalReadPages,
                        books: validateBooks,
                        results,
                    },
                });
            });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getTraining,
};
