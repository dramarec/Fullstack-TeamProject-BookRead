const Joi = require('joi');

const schemaCreateBook = Joi.object({
  title: Joi.string().min(3).max(30).required(),

  author: Joi.string().min(3).max(30),

  year: Joi.number().min(1500).max(new Date().getFullYear()),

  numberOfPages: Joi.number().min(10).max(33000).required(),
});

const schemaUpdateBook = Joi.object({
  review: Joi.string().max(3000),

  rating: Joi.number().min(0).max(5),
});

const validate = (schema, body, next) => {
  const { error } = schema.validate(body);
  if (error) {
    const [{ message }] = error.details;
    return next({
      status: 404,
      message,
      data: 'Bad Request',
    });
  }
  next();
};

module.exports.schemaCreateBook = (req, res, next) => {
  return validate(schemaCreateBook, req.body, next);
};
module.exports.schemaUpdateBook = (req, res, next) => {
  return validate(schemaUpdateBook, req.body, next);
};
