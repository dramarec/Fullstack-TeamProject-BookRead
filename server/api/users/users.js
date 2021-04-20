const express = require('express');
const router = express.Router();

const { UsersCtrl } = require('../../controllers');
const guard = require('../../utils/guard');
const validateUser = require('../../utils/validations/validationUser');

router.post('/auth/register', validateUser, UsersCtrl.reg);
router.post('/auth/login', validateUser, UsersCtrl.login);
router.post('/auth/logout', guard, UsersCtrl.logout);

module.exports = router;
