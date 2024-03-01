const {wrapper} = require("../../middlewar");
const getAll = require("./getAll");
const getAllFilters =require("./getAllFilters")

module.exports = {
    getAll: wrapper(getAll),
    getAllFilters: wrapper(getAllFilters),
}