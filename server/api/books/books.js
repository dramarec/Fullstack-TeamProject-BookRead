const express = require("express");
const router = express.Router();

const { BooksCtrl } = require("../../controllers");
const guard = require("../../utils/guard")

router.get("/", guard, BooksCtrl.get);

module.exports = router;
