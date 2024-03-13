const {Exercise} = require("../../model/exercises")
const {HttpError} = require("../../helper");

const getAll = async (req,res)=>{
    console.log(123)
    console.log(req.query)

    const keyQuery = ["bodyPart", "equipment", "target"]

    const foundKey = keyQuery.find(key => req.query[key] !== undefined);

    if (!foundKey){
        return
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