const getCurrent = async (req, res) => {
    const { _id, name, email, avatarURL, bodyData, dailyCalorie } = req.user;

    res.json({
        _id,
        name,
        email,
        avatarURL,
        bodyData,
        dailyCalorie,
    })
}

module.exports = getCurrent;
