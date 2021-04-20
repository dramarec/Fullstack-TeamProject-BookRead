const { Book } = require('../models');

const getAll = query => {
  return Book.find(query);
};
const addNewBook = async (body, userId) => {
    const book = await Book.create({...body, creator: userId})
    return book
  }
  
  const updateBook = async (userId, bookId, body) => {
   const book = Book.findByIdAndUpdate({ _id: bookId, creator: userId }, {...body}, { new: true })
   .populate({
    path: 'creator',
    select: 'name email -_id'
  })
    return book
  }
  
  
module.exports = {
    getAll,
    addNewBook,
    updateBook
};
