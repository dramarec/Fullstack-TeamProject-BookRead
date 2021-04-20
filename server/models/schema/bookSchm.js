const { Schema, SchemaTypes } = require("mongoose");

const bookSchema = Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'user',
        required: true,
      }
});
module.exports = bookSchema;
