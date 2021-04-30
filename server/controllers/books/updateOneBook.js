const { booksServices } = require('../../services');

const updateOneBook = async (req, res, next) => {
    try {
        const userID = req.user.id;
        console.log(userID);
        const book = await booksServices.updateBook(
            userID,
            req.params.bookId,
            req.body,
        );
        if (book) {
            return res.status(201).json({
                status: 'success',
                code: 201,
                data: {
                    book,
                },
            });
        } else {
            return next({
                status: 404,
                message: 'missing fields',
                data: 'Not Found',
            });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    updateOneBook,
};
