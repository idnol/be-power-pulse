const { User } = require("../../model/users");
const bmr = require("./services/bmr");
const ageFromDate = require("./services/ageFromDate");
const { HttpError } = require("../../helper");

const updateProfile = async (req, res) => {
    const bodyData = req.body;
    const { name } = bodyData
    const { _id } = req.user;
    const dailyExerciseTime = 110;

    const age = ageFromDate(bodyData.birthday)

    const dailyCalorie = bmr(bodyData, age)

    const result = await User.findByIdAndUpdate(_id, { name, bodyData, dailyCalorie });

    if (!result) {
        throw HttpError(404);
    }

    res.json({ dailyCalorie, dailyExerciseTime, bodyData });

}

module.exports = updateProfile;