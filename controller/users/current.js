const getCurrent = async (req, res) => {
    const { _id, name, email, dailyCalorie, dailyExerciseTime, bodyData } = req.user;

    res.json({
        _id,
        name,
        email,
        dailyCalorie,
        dailyExerciseTime,
        bodyData
    })
}

module.exports = getCurrent;
