const Diary = require('../../model/diaries');
const {HttpError} = require("../../helper");
const addNewDiary = require("./services/addNewDiary");
const getDate = require("./services/getDate");

const addExercise = async (req, res) => {
    const {exercise, user, time} = req.body;
    const calories = 100;
    const allDiaries = await Diary.find();

    let result;

    if (!allDiaries.length) {
        result = await addNewDiary({user, exercise, time});
    } else {
        const diary = await Diary.findOne({owner: user, date: getDate()});
        if (!diary) {
            result = await addNewDiary({user, exercise, time});
        } else {
            const {_id, exercises} = diary
            exercises.push({ exercise, time })
            result = await Diary.findByIdAndUpdate(_id, {exercises},)
        }
    }

    res.json(result);
}

module.exports = addExercise;