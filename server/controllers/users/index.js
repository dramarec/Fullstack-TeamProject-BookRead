const { reg, login, logout } = require('./post');
const { getUserInfo } = require('./get');
const googleAuth = require('./google');

module.exports = {
  reg,
  login,
  logout,
  getUserInfo,
  googleAuth,
};
