const Joi = require('joi');

const schemaRegistration = Joi.object({
  username: Joi.string().min(2).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(6).max(20).required(),
});

const schemaLogin = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(6).max(20).required(),
});

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj);
  if (error) {
    const [{ message }] = error.details;
    return res.status(400).json({
      status: 400,
      message,
      data: 'Bad Request',
      message: `Filed: ${message.replace(/"/g, '')}`,
    });
  }
  next();
};

const reg = (req, res, next) => {
  return validate(schemaRegistration, req.body, next);
};

const login = (req, res, next) => {
  return validate(schemaLogin, req.body, next);
};

module.exports = {
  reg,
  login,
};
