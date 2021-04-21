const { model } = require('mongoose');

const { bookSchema } = require('./schema');

const Book = model('Book', bookSchema);

module.exports = Book;
