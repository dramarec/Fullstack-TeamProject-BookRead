const express = require("express");
const router = express.Router();

const { UsersCtrl } = require("../../controllers");
const guard = require("../../utils/guard")

router.post('/auth/register', UsersCtrl.reg)
router.post('/auth/login', UsersCtrl.login)
router.post('/auth/logout', guard, UsersCtrl.logout)

module.exports = router;