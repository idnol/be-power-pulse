const {Diary} = require("../../model/diaries");
const getDate = require("./services/getDate");
const {HttpError} = require("../../helper");
const removeExercise = async (req, res) => {
    const {_id: user} = req.user;
    const {id, calories, time, date} = req.body;

    const dateAndTime = date.split('T');
    const dateParts = dateAndTime[0].split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    const formattedDate = day + '/' + month + '/' + year;

    const diary = await Diary.findOne({
        owner: user,
        date: formattedDate
    });

    if (!diary) {
        throw HttpError(404);
    }

    const {_id, statistic} = diary;
    statistic.burnedCalories -= calories;
    statistic.sportTime -= time;

    const data = await Diary.findByIdAndUpdate(
        _id,
        {
            statistic: {
                ...statistic,
                burnedCalories: statistic.burnedCalories,
                sportTime: statistic.sportTime
            },
            $pull: { exercises: { _id: id } }
        },
        { new: true }
    ).populate('exercises.exercise');

    if (!data) {
        throw HttpError(404);
    }

    res.json(data);
}

module.exports = removeExercise;