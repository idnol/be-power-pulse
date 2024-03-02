const { Schema, model } = require("mongoose");

const Exercise = model('exercises', new Schema());
const Filter = model("filters", new Schema())

module.exports = {Exercise, Filter}