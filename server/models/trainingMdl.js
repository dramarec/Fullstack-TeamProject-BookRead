const { model } = require("mongoose");
const { trainingSchema } = require("./schema");

const Training = model("training", trainingSchema);

module.exports = Training;
