const { User } = require("../../model/users");
const { HttpError } = require("../../helper");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const uniqid = require("uniqid");

// require('dotenv').config();

// const { BASE_URL } = process.env;

const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw HttpError(409, "Email in use")
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const avatarURL = gravatar.url(email);
    const verificationToken = uniqid();

    const userNew = await User.create({ name, email, password: hashedPassword, avatarURL, verificationToken })

    // const verifyEmail = {
    //     to: email,
    //     subject: "Verify email",
    //     html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
    // };

    // await sendEmail(verifyEmail);

    res.status(201).json({
        user: {
            name: userNew.name,
            email: userNew.email,
        }
    })
}

module.exports = register;