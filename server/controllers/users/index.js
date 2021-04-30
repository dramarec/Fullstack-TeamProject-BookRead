const { reg, login, logout } = require('./post');
const { getUserInfo } = require('./get');
const { googleAuth, googleRedirect, googleLogin } = require('./google');

module.exports = {
    reg,
    login,
    logout,
    getUserInfo,
    googleAuth,
    googleRedirect,
    googleLogin,
};
