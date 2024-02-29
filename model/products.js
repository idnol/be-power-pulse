const {model, Schema} = require("mongoose");

const Products = model('products', new Schema());

module.exports = Products;