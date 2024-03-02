const {wrapper} = require("../../middlewar");
const addProduct = require("./addProduct");
const addExercise = require("./addExercise");
const removeProduct = require("./removeProduct");
const getDiary = require("./getDiary");
const removeExercise = require("./removeExercise");

module.exports = {
    addProduct: wrapper(addProduct),
    addExercise: wrapper(addExercise),
    removeProduct: wrapper(removeProduct),
    removeExercise: wrapper(removeExercise),
    getDiary: wrapper(getDiary)
}