const Diary = require("../../../model/diaries");
const getDate = require("./getDate");
const addNewDiary = async (obj) => {
    const {user, product, exercise, weight, time = 0, calories = 0, amount = 0, statistic} = obj;
    const {calories: dayCalories = 0, burnedCalories = 0, sportTime = 0} = statistic;
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

    diary.statistic = {
        calories: dayCalories,
        burnedCalories,
        sportTime
    }

    return Diary.create(diary);
}

module.exports = addNewDiary;