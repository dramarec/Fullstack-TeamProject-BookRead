const { Book } = require("../models");

const getAll = (query) => {
    return Book.find(query);
};
const addNewBook = async (body/* userId*/) => {
    const book = await Book.create({...body/*, creator: userId*/})
    return book
  }
  
  const updateBook = async (/*userId,*/ bookId, body) => {
   const book = Book.findByIdAndUpdate({ _id: bookId, /*creator: userId*/ }, {...body}, { new: true })
    return book
  }
  
  
module.exports = {
    getAll,
    addNewBook,
    updateBook
};
