const { User } = require("../../model/users");
const uploadPhoto = require("./services/uploadPhoto");
const {HttpError} = require("../../helper");
const updateAvatar = async (req, res) => {
    const { _id, bodyData } = req.user;

    bodyData.avatar = await uploadPhoto(req.file.path)

    if (!bodyData.avatar) {
        throw HttpError(404);
    }

    const result = await User.findByIdAndUpdate(_id, { bodyData }, {new: true});

    if (!result) {
        throw HttpError(500);
    }

    const avatar = bodyData.avatar
    res.json({ avatar })
}

module.exports = updateAvatar;