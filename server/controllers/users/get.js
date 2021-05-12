const { User } = require('../../models');

const getUserInfo = async (req, res, next) => {
    try {
        const { email, username, _id, books, training } = req.user;

        await User.findOne(_id)
            .populate('books')
            .exec(async (err, data) => {
                if (err) {
                    next(err);
                }
                if (!data) {
                    return res.status(403).json({
                        status: 'error',
                        code: 403,
                        message: 'No books in your library ',
                    });
                }

                const planeToRead = data.books.filter(
                    book => book.readPages === 0,
                );
                const readNow = data.books.filter(
                    book =>
                        book.readPages !== 0 &&
                        book.readPages !== book.numberOfPages,
                );
                const readFinish = data.books.filter(
                    book => book.readPages === book.numberOfPages,
                );

                return res.status(200).json({
                    status: 'success',
                    code: 200,
                    data: {
                        email,
                        username,
                        books,
                        training,
                        planeToRead,
                        readNow,
                        readFinish,
                    },
                });
            });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getUserInfo,
};
