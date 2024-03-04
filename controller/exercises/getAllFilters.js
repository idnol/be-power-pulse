const {Filter} = require("../../model/exercises")
const {HttpError} = require("../../helper");

const getAllFilters = async (req,res)=>{

    const result = await Filter.find();

    if (!result) {
        throw HttpError(404);
    }

    res.json(result);

}

module.exports = getAllFilters