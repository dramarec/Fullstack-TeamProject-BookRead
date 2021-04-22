const express = require('express');
const router = express.Router();
// const tryCatchWrap = require('../../helpers/tryCatchWrap');
const { googleAuth, googleRedirect } = require('../../controllers/users');

router.post('/google', googleAuth);
// router.get('/google-redirect', googleRedirect);
// router.get('/google', tryCatchWrap(googleAuth));
// router.get('/google-redirect', tryCatchWrap(googleRedirect));

module.exports = router;
