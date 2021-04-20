const { booksServices } = require("../../services");

const addNewBook = async (req, res, next) => {
    try {
      const userID = req.user.id
      const book = await booksServices.addNewBook(req.body, userID )
      if (book)
      {
        res.status(201).json({
        status: 'success',
        code: 201,
        data: {
            book
        }
      })}
      else {
        return next ({
          status: 404,
          message: 'Not found contact',
          data: 'Not Found'
        })
      }
   } catch (error) {
     next(error)
   }
  
  }

  module.exports = {
    addNewBook
}