const Diary = require('../../model/diaries');
const {HttpError} = require("../../helper");
const addNewDiary = require("./services/addNewDiary");
const getDate = require("./services/getDate");
const Products = require("../../model/products");

const addProduct = async (req, res) => {
    const {_id: user} = req.user;
    const {product, weight} = req.body;
    const myProduct = await Products.findById(product, 'calories');

    if (!myProduct) {
        throw HttpError(404);
    }

    const defaultCalories = myProduct._doc.calories;
    const calories = Math.floor((defaultCalories * weight) / 100)

    const allDiaries = await Diary.find();

    if (!allDiaries) {
        throw HttpError(404);
    }

    let result;

    if (!allDiaries.length) {
        result = await addNewDiary({
            user,
            product,
            weight,
            calories,
            statistic: {calories}
        });
    } else {
        const diary = await Diary.findOne({
            owner: user,
            date: getDate()
        });

        if (!diary) {
            result = await addNewDiary({
                user,
                product,
                weight,
                calories,
                statistic: {calories}
            });
        } else {
            const {_id, products, statistic} = diary;
            products.push({
                product,
                weight,
                calories
            })
            diary.statistic.calories += calories

            result = await Diary.findByIdAndUpdate(
                _id,
                {
                    products,
                    statistic:
                        {
                            ...diary.statistic,
                            calories: diary.statistic.calories
                        }
                }
            )
        }
    }

    if (!result) HttpError(404, 'not found');

    res.json(result);
}

module.exports = addProduct;