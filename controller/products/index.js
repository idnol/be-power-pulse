const getAll = require("./getAll");
const {wrapper} = require("../../middlewar");
const getRecommended = require("./getRecommended");

module.exports = {
    getAll: wrapper(getAll),
    getRecommended: wrapper(getRecommended)
}