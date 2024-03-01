const HttpError = require("../helper/HttpError");
const jwt = require("jsonwebtoken");
const { User } = require("../model/users");
require("dotenv").config();

const { SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(HttpError(401));
  }

  try {
    const { id } = jwt.verify(token, SECRET);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401));
    }
    req.user = user;
    next();
  } catch (e) {
    next(HttpError(401));
  }
};

module.exports = authenticate;
