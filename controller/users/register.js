const { User } = require("../../model/users");
const { HttpError } = require("../../helper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SECRET } = process.env

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw HttpError(409, "Email already in use")
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        name,
        email,
        password: hashedPassword
    }

    const savedUser = await User.create(newUser);

    const payload = {
        id: savedUser._id,
    };
    const token = jwt.sign(payload, SECRET, { expiresIn: "23h" });

    const userNew = await User.findByIdAndUpdate(savedUser._id,{
        dailyExerciseTime: 0,
        dailyCalorie: 0,
        token
    })

    res.status(201).json({
        token,
        user: {
            name: userNew.name,
            email: userNew.email,
        }
    })
}

module.exports = register;