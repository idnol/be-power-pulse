const {Exercise} = require("../../model/exercises")

const getAll = async (req,res)=>{

    const result = await Exercise.find();
    res.json(result);

}

module.exports = getAll