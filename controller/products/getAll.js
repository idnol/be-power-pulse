const Products = require('../../model/products');
const {HttpError} = require("../../helper");

const getAll = async (req, res) => {
    const result = await Products.find();
    if (!result) {
        throw HttpError(404);
    }
    res.json(result);
}

module.exports = getAll;