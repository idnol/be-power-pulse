const Diary = require("../../model/diaries");
const getDate = require("./services/getDate");
const {HttpError} = require("../../helper");
const getDiary = async (req, res) => {
    const {_id: user} = req.user;

    const result = await Diary.findOne({
        owner: user,
        date: getDate()
    }).populate('products.product').populate('exercises.exercise');

    if (!result) HttpError(404, 'not found');

    res.json(result);
}

module.exports = getDiary;