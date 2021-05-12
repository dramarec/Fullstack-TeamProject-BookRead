const { model } = require('mongoose');
const { trainingSchema } = require('./schema');

const Training = model('Training', trainingSchema);

module.exports = Training;
