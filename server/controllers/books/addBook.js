const { Book } = require('../../models');
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

    const newBook = await Book.create({
      ...book,
      readPages: 0,
    });

    user?.books.push(newBook);
    await user?.save();

    //return res.status(201).send({ newBook });
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        newBook: {
          id: newBook._id,
          title: newBook.title,
          author: newBook.author,
          year: newBook.year,
          numberOfPages: newBook.numberOfPages,
          readPages: newBook.readPages,
          review: newBook.review,
          rating: newBook.rating,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addNewBook,
};
