const Diary = require('../../model/diaries');
const {HttpError} = require("../../helper");
const addNewDiary = require("./services/addNewDiary");
const getDate = require("./services/getDate");

const addProduct = async (req, res) => {
    const {product, user, weight} = req.body;
    const calories = 100;
    const allDiaries = await Diary.find();

    let result;

    if (!allDiaries.length) {
        result = await addNewDiary({user, product, weight});
    } else {
        const diary = await Diary.findOne({owner: user, date: getDate()});
        if (!diary) {
            result = await addNewDiary({user, product, weight});
        } else {
            const {_id, products} = diary
            products.push({ product, weight })
            result = await Diary.findByIdAndUpdate(_id, {products},)
        }
    }

    res.json(result);
}

module.exports = addProduct;