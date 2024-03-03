const { User } = require("../../model/users");
const { HttpError } = require("../../helper");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw HttpError(409, "Email already in use")
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const avatarURL = gravatar.url(email);

    const userNew = await User.create({ name, email, password: hashedPassword, avatarURL })

    res.status(201).json({
        name: userNew.name,
        email: userNew.email,
    })
}

module.exports = register;