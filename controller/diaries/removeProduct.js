const Diary = require("../../model/diaries");
const getDate = require("./services/getDate");
const {HttpError} = require("../../helper");
const removeProduct = async (req, res) => {
    const {_id: user} = req.user;
    const {id, calories} = req.body;

    const diary = await Diary.findOne({
        owner: user,
        date: getDate()
    });

    if (!diary) {
        throw HttpError(404);
    }

    const {_id, statistic} = diary;
    statistic.calories -= calories;

    const data = await Diary.findByIdAndUpdate(
        _id,
        {
            statistic: {
                ...statistic,
                calories: statistic.calories
            },
            $pull: { products: { _id: id } }
        },
        { new: true }
    )

    if (!data) {
        throw HttpError(404);
    }

    res.json(data);
}

module.exports = removeProduct;