const { Schema, SchemaTypes } = require('mongoose');

const trainingSchema = new Schema(
  {
    start: {
      type: String,
      required: [true, 'start date is required'],
    },
    end: {
      type: String,
      required: [true, 'end date is required'],
    },
    duration: Number,
    books: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Book',
      },
    ],
    pagesReadPerDay: Number,
    rest: {
      type: Number,
      default: 0,
    },
    results: [
      {
        date: {
          type: String,
          required: [true, 'date is required'],
        },
        pageCount: {
          type: Number,
          required: [true, 'pages is required'],
        },
      },
    ],
  },
  { versionKey: false },
);

module.exports = trainingSchema;
