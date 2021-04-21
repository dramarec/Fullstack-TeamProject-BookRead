const { Schema, SchemaTypes } = require('mongoose');

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Enter title of book'],
      minlength: [3, "Title can't be smaller than 2 characters"],
      maxlength: [30, "Title can't be longer than 30 characters"],
      unique: true,
    },
    author: {
      type: String,
      minlength: [3, "Author's name can't be smaller than 2 characters"],
      maxlength: [30, "Author's name can't be longer than 30 characters"],
    },
    year: {
      type: Number,
      min: [1500, 'Wrong year'],
      max: [new Date().getFullYear(), "Year can't be more than current"],
    },
    numberOfPages: {
      type: Number,
      min: [10, "Number of page can't be less than 10"],
      max: [33000, "Number of page can't be more than 330000"],
      required: [true, 'Enter number of pages'],
    },
    readPages: {
      type: Number,
      default: null,
    },
    review: {
      type: String,
      default: '',
      maxlength: [3000, "Title can't be longer than 3000 characters"],
    },
    rating: {
      type: Number,
      default: null,
      min: 0,
      max: 5,
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = bookSchema;
