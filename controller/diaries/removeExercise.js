const Diary = require("../../model/diaries");
const getDate = require("./services/getDate");
const removeExercise = async (req, res) => {
    const {_id: user} = req.user;
    const {id, calories, time} = req.body;

    const diary = await Diary.findOne({
        owner: user,
        date: getDate()
    });

    console.log(diary)

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
    )

    res.json(data);
}

module.exports = removeExercise;