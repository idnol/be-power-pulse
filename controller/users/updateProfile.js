const { User } = require("../../model/users");
const bmr = require("./services/bmr");
const ageFromDate = require("./services/ageFromDate");
const { HttpError } = require("../../helper");

const updateProfile = async (req, res) => {
    const {name: name, ...bodyData} =req.body
    const { _id } = req.user;

    const dailyExerciseTime = 110;

    const age = ageFromDate(bodyData.birthday)
    const dailyCalorie = bmr(bodyData, age)

    const result = await User.updateOne({ _id }, { $set: { name, dailyCalorie, dailyExerciseTime, 'bodyData': { ...bodyData } } });

    if (!result) {
        throw HttpError(404);
    }

    res.json({ name, dailyCalorie, dailyExerciseTime, bodyData: { ...bodyData } });

}

module.exports = updateProfile;