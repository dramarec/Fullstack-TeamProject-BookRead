const express = require("express");
const router = express.Router();

const { BooksCtrl } = require("../../controllers");

router.get("/", BooksCtrl.get);

module.exports = router;
