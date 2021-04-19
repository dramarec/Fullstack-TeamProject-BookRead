const { Schema } = require("mongoose");

const bookSchema = Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
});
module.exports = bookSchema;
