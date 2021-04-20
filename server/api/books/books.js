const express = require("express");
const router = express.Router();
const {schemaUpdateBook, schemaCreateBook } = require('../../utils/validationBook')
const { BooksCtrl } = require("../../controllers");

router.get("/", BooksCtrl.get);
router.post('/', schemaCreateBook, BooksCtrl.addNewBook)
router.patch('/:bookId', schemaUpdateBook, BooksCtrl.updateOneBook)

module.exports = router;
