const { booksServices } = require('../../services');

const addNewBook = async (req, res, next) => {
  try {
    // const userID = req.user.id;
    // const book = await booksServices.addNewBook(req.body, userID);
    // if (book) {
    //   res.status(201).json({
    //     status: 'success',
    //     code: 201,
    //     data: {
    //       book,
    //     },
    //   });
    // } else {
    //   return next({
    //     status: 404,
    //     message: 'Not found contact',
    //     data: 'Not Found',
    //   });
    // }
    const book = req.body;
    const user = req.user;

    const newBook = await booksServices.addNewBook({
      ...book,
      finishedPages: 0,
    });

    user?.books.push(newBook);
    user?.save();

    res.status(201).json({
      status: 'success',
      code: 201,
      data: { newBook },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addNewBook,
};
