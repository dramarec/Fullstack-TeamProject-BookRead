const express = require('express');
const router = express.Router();
const {
  schemaUpdateBook,
  schemaCreateBook,
} = require('../../utils/validations/validationBook');
const { BooksCtrl } = require('../../controllers');
const guard = require('../../utils/guard');

router.get('/', guard, BooksCtrl.get);
router.post('/', /* guard, */ schemaCreateBook, BooksCtrl.addNewBook);
router.patch('/:bookId', guard, schemaUpdateBook, BooksCtrl.updateOneBook);

module.exports = router;
