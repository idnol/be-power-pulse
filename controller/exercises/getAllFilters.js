const {Filter} = require("../../model/exercises")

const getAllFilters = async (req,res)=>{

    const result = await Filter.find();
    res.json(result);

}

module.exports = getAllFilters