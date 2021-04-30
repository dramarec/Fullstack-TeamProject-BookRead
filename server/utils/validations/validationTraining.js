const Joi = require('joi');

const schemaAddTraining = Joi.object({
    start: Joi.string()
        .custom((value, helpers) => {
            const regEx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

            const validDate = regEx.test(value);

            if (!validDate) {
                return helpers.error(400, 'invalid format, use YYYY-MM-DD');
            }

            return value;
        })
        .required(),

    end: Joi.string()
        .custom((value, helpers) => {
            const regEx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

            const validDate = regEx.test(value);

            if (!validDate) {
                return helpers.error(400, 'invalid format, use YYYY-MM-DD');
            }

            return value;
        })
        .required(),

    books: Joi.array().items(Joi.string()).min(1).required(),
});

const schemaAddRead = Joi.object({
    date: Joi.string()
        .custom((value, helpers) => {
            const regEx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

            const validDate = regEx.test(value);

            if (!validDate) {
                return helpers.error(400, 'invalid format, use YYYY-MM-DD');
            }

            return value;
        })
        .required(),

    pages: Joi.number().min(1).required(),
});

const validate = (schema, obj, next) => {
    const { error } = schema.validate(obj);

    if (error) {
        const [{ message }] = error.details;

        return next({
            status: 'bad request',
            code: 400,
            data: 'Bad Request',
            message: `Filed: ${message.replace(/"/g, '')}`,
        });
    }

    next();
};

module.exports.addTraining = (req, res, next) => {
    return validate(schemaAddTraining, req.body, next);
};

module.exports.addRead = (req, res, next) => {
    return validate(schemaAddRead, req.body, next);
};
