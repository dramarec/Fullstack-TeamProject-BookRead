const { reg, login, logout } = require('./post');
const { googleRedirect, googleAuth } = require('./google');

module.exports = {
  reg,
  login,
  logout,
  googleAuth,
  googleRedirect,
};
