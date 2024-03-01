const getAll = require("./getAll");
const {wrapper} = require("../../middlewar");
const getCategories = require("./getCategories");

module.exports = {
    getAll: wrapper(getAll),
    getCategories: wrapper(getCategories)
}