const {Exercise} = require("../../model/exercises")
const {HttpError} = require("../../helper");

const getAll = async (req,res)=>{

    if (!req.query) {
        throw HttpError(404);
    }

    const keyQuery = ["bodyPart", "equipment", "target"]

    const foundKey = keyQuery.find(key => req.query[key] !== undefined);
    console.log(foundKey)
    if (!foundKey){
        throw HttpError(404);
    }
    const value = req.query[foundKey];
    const query = value.split('-').join(' ');

    const filter = {};
    filter[foundKey] = query;

    const result = await Exercise.find(filter);

    if (!result) {
        throw HttpError(404);
    }

    res.json(result);

}

module.exports = getAll