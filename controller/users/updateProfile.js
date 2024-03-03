const { User } = require("../../model/users");
const bmr = require("./services/bmr");
const ageFromDate = require("./services/ageFromDate");

const updateProfile = async (req, res) => {
    const bodyData = req.body;
    const { name, email } = bodyData
    const { _id } = req.user;
    const dailyExerciseTime = 110;

    const age = ageFromDate(bodyData.birthday)

    const dailyCalorie = bmr(bodyData, age)

    await User.findByIdAndUpdate(_id, {name, email, bodyData, dailyCalorie,});

    res.json({ dailyCalorie, dailyExerciseTime, bodyData });

}

module.exports = updateProfile;