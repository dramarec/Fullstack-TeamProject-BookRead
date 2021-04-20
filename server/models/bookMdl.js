const { model } = require("mongoose");

const { bookSchema } = require("./schema");

const Book = model("book", bookSchema);

module.exports = Book;

 