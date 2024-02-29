const { controllerWrapper } = require("../../helper");
const register = require("./register");

module.exports = {
    register: controllerWrapper(register),
}