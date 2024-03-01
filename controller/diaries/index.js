const {wrapper} = require("../../middlewar");
const addProduct = require("./addProduct");
const addExercise = require("./addExercise");

module.exports = {
    addProduct: wrapper(addProduct),
    addExercise: wrapper(addExercise)
}