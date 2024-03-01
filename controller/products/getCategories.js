const Products = require('../../model/products');
const {HttpError} = require("../../helper");

const getCategories = async (_, res) => {
    const categories = [
        "alcoholic drinks",
        "berries",
        "cereals",
        "dairy",
        "dried fruits",
        "eggs",
        "fish",
        "flour",
        "fruits",
        "meat",
        "mushrooms",
        "nuts",
        "oils and fats",
        "poppy",
        "sausage",
        "seeds",
        "sesame",
        "soft drinks",
        "vegetables and herbs"
    ];

    res.json(categories);
}

module.exports = getCategories;