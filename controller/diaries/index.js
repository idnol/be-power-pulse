const {wrapper} = require("../../middlewar");
const addProduct = require("./addProduct");

module.exports = {
    addProduct: wrapper(addProduct),
}