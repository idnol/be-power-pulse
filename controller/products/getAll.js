const Products = require('../../model/products');
const {HttpError} = require("../../helper");

const getAll = async (req, res) => {

    const filter = {};

    if (req.query) {
        if (req.query.query) {
            filter.title = { $regex: req.query.query, $options: 'i' };
        }

        if (req.query.category) {
            filter.category = req.query.category;
        }
        if (req.query.recommended && req.query.recommended !== 'All') {
            filter[`groupBloodNotAllowed.${req.query.blood}`] = req.query.recommended === 'recommended'
        }
    }

    const result = await Products.find(filter);

    if (!result) {
        throw HttpError(404);
    }

    res.json(result);
}

module.exports = getAll;