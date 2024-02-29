const Products = require('../../model/products');
const {HttpError} = require("../../helper");

const getRecommended = async (req, res) => {
    const {blood} = req.body;
    const query = {};
    query[`groupBloodNotAllowed.${blood}`] = true;

    const result = await Products.find(query);

    if (!result) {
        throw HttpError(404);
    }

    res.json(result);
}

module.exports = getRecommended;