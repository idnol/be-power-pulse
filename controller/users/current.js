const getCurrent = async (req, res) => {
    const { _id, name, email, avatarURL, bodyData } = req.user;

    res.json({
        _id,
        name,
        email,
        avatarURL,
        bodyData,
    })
}

module.exports = getCurrent;
