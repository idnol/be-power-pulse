const HttpError = require("../helper/HttpError.js");

const validateUserRights = (req, _, next) => {
  if (req.user.role !== "admin") {
    next(HttpError(400, 'You must have "admin" role for this operation'));
  }
  next();
};

module.exports = validateUserRights;
