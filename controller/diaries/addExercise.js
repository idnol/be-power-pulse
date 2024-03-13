const Diary = require('../../model/diaries');
const {HttpError} = require("../../helper");
const addNewDiary = require("./services/addNewDiary");
const getDate = require("./services/getDate");
const {Exercise} = require("../../model/exercises");

const addExercise = async (req, res) => {
    const {_id: user} = req.user;
    const {exercise, time} = req.body;
    const myExercise = await Exercise.findById(exercise, 'burnedCalories');

    if (!myExercise) {
        throw HttpError(404);
    }

    const defaultCalories = myExercise._doc.burnedCalories;
    const calories = Math.floor((defaultCalories * time) / 180)

    let result;

    const diary = await Diary.findOne({
        owner: user,
        date: getDate()
    });

    if (!diary) {
        result = await addNewDiary({
            user,
            exercise,
            time,
            calories,
            statistic: {
                burnedCalories: calories,
                sportTime: time
            }
        });
    } else {
        const {_id, exercises} = diary
        exercises.push({ exercise, time, calories });
        diary.statistic.burnedCalories += calories;
        diary.statistic.sportTime += time;

        result = await Diary.findByIdAndUpdate(
            _id,
            {
                exercises,
                statistic: {
                    ...diary.statistic,
                    burnedCalories: diary.statistic.burnedCalories,
                    sportTime: diary.statistic.sportTime
                }
            }, { new: true }
        )
    }

    if (!result) HttpError(404, 'not found');

    res.json(result);
}

module.exports = addExercise;