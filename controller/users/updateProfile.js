const { User } = require("../../model/users");

const bmrFoo = require("./services/bmr")
const ageFromDate = require("./services/ageFromDate")
// const {HttpError} = require("../../helper");

const updateProfile = async (req, res) => {
    const { sex, desiredWeight, currentWeight, height, birthday, blood, levelActivity } = req.body;
    const { _id } = req.user;

    const bodyDate = {
        height,
        currentWeight,
        desiredWeight,
        birthday,
        blood,
        sex,
        levelActivity
    };
    console.log(birthday)

    const age = ageFromDate(birthday)


    await User.findByIdAndUpdate(_id, { bodyDate });

    const dailyExerciseTime = 110;
    const bmr = bmrFoo(sex, currentWeight, height, age, levelActivity)

    res.json({ bmr, dailyExerciseTime });
}






module.exports = updateProfile;