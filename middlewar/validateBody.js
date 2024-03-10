const HttpError = require("../helper/HttpError.js");

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req?.body);
    if (error) {
      console.log('Validation Error:', error.details);
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
