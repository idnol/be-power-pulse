const getCurrent = async (req, res) => {
    const { _id, name, email, avatarURL, bodyData, dailyCalorie, dailyExerciseTime } = req.user;

    res.json({
        _id,
        name,
        email,
        avatarURL,
        bodyData,
        dailyCalorie,
        dailyExerciseTime
    })
}

module.exports = getCurrent;
