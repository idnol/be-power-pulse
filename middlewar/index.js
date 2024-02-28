const validateUserRights = require("./validateUserRights");
const validateBody = require("./validateBody");
const handleMongooseError = require("./handleMongooseError");
const wrapper = require("./wrapper");


module.exports = {
    validateUserRights: validateUserRights,
    validateBody: validateBody,
    handleMongooseError: handleMongooseError,
    wrapper: wrapper
}