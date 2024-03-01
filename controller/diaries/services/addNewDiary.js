const Diary = require("../../../model/diaries");
const getDate = require("./getDate");
const addNewDiary = async (obj) => {
    const {user, product, exercise, weight, time = 0, calories = 0, amount = 0} = obj;
    const diary = {
        owner: user,
        date: getDate(),
    }

    if (product) {
        diary.products = [{
            product,
            weight,
            calories
        }];
    }

    if (exercise) {
        diary.exercises = [{
            exercise,
            time,
            calories
        }];
    }

    return Diary.create(diary);
}

module.exports = addNewDiary;