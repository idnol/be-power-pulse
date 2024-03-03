const Diary = require("../../model/diaries");
const getDate = require("./services/getDate");
const removeProduct = async (req, res) => {
    const {_id: user} = req.user;
    const {id, calories} = req.body;

    const diary = await Diary.findOne({
        owner: user,
        date: getDate()
    });

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

    res.json(data);
}

module.exports = removeProduct;