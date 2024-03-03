const { User } = require("../../model/users");
const uploadPhoto = require("./services/uploadPhoto");
const updateAvatar = async (req, res) => {
    const { _id, bodyData } = req.user;

    bodyData.avatar = await uploadPhoto(req.file.path)

    await User.findByIdAndUpdate(_id, { bodyData });
    const avatar = bodyData.avatar
    res.json({ avatar })
}

module.exports = updateAvatar;