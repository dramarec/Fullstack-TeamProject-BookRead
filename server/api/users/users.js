const express = require('express');
const router = express.Router();

const { UsersCtrl } = require('../../controllers');
const guard = require('../../utils/guard');
const validateUser = require('../../utils/validations/validationUser');

router.post('/auth/register', validateUser.reg, UsersCtrl.reg);
router.post('/auth/login', validateUser.login, UsersCtrl.login);
router.post('/auth/logout', guard, UsersCtrl.logout);
router.get('/user', guard, UsersCtrl.getUserInfo);

router.get('/auth/google', UsersCtrl.googleAuth);
router.get('/auth/google-redirect', UsersCtrl.googleRedirect);
router.post('/auth/google-login', UsersCtrl.googleLogin);

module.exports = router;
