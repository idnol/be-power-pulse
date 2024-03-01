const Diary = require("../../../model/diaries");
const getDate = require("./getDate");
const addNewDiary = async ({user, product, exercise, weight, time}) => {
    const diary = {
        owner: user,
        date: getDate(),
    }

    if (product) {
        diary.products = [{
            product,
            weight
        }];
    }

    if (exercise) {
        diary.exercises = [{
            exercise,
            time
        }];
    }

    return Diary.create(diary);
}

module.exports = addNewDiary;