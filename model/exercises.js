const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema();
const Exercise = model('Exercise', exerciseSchema);

const typeSchema = new Schema();
const Filter = model("filters", typeSchema)
module.exports = {Exercise, Filter}