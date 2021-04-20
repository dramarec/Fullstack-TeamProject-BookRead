const { Book } = require('../models');

const getAll = query => {
  return Book.find(query);
};

module.exports = {
  getAll,
};
