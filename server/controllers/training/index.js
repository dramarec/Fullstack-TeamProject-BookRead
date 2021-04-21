const { addTraining } = require('./post');
const { addRead } = require('./patch');
const { getTraining } = require('./get');

module.exports = {
  addTraining,
  addRead,
  getTraining,
};
