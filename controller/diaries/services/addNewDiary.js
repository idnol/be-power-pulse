const Diary = require("../../../model/diaries");
const getDate = require("./getDate");
const addNewDiary = async ({user, product, exercise, weight}) => {
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
        diary.exerciseId = [exercise];
    }

    return Diary.create(diary);
}

module.exports = addNewDiary;