const {Exercise} = require("../../model/exercises")
const {HttpError} = require("../../helper");

const getAll = async (req,res)=>{

    const result = await Exercise.find();

    if (!result) {
        throw HttpError(404);
    }

    res.json(result);

}

module.exports = getAll