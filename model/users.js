const { Schema, model } = require('mongoose');
const Joi = require("joi");
const handleMongooseError = require('../middlewar/handleMongooseError');
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const registerSchema = Joi.object({
    name: Joi.string()
        .required()
        .empty(false)
        .messages({
            "any.required": "The name field is required.",
            "string.empty": "The name must not be empty",
        }),
    email: Joi.string()
        .pattern(emailRegex)
        .required()
        .empty(false)
        .messages({
            "any.required": "The email field is required.",
            "string.empty": "The email must not be empty",
            "string.pattern.base": "The email must be in format test@gmail.com.",
        }),
    password: Joi.string()
        .required()
        .min(6)
        .empty(false)
        .messages({
            "any.required": "The password field is required.",
            "string.empty": "The password must not be empty.",
            "string.min": "The password must be not less 6 symbols.",
        }),
});

const loginSchema = Joi.object({
    email: Joi.string()
        .pattern(emailRegex)
        .required()
        .empty(false)
        .messages({
            "any.required": "The email field is required.",
            "string.empty": "The email must not be empty",
            "string.pattern.base": "The email must be in format test@gmail.com.",
        }),
    password: Joi.string()
        .required()
        .min(6)
        .empty(false)
        .messages({
            "any.required": "The password field is required.",
            "string.empty": "The password must not be empty.",
            "string.min": "The password must be not less 6 symbols.",
        }),
});

const userJoiSchema = Joi.object({
    name: Joi.string().min(3).required(),
    height: Joi.number().min(150).required(),
    currentWeight: Joi.number().min(35).required(),
    desiredWeight: Joi.number().min(35).required(),
    birthday: Joi.date().iso().max('now').required().raw().custom((value, helpers) => {
        const age = new Date().getFullYear() - new Date(value).getFullYear();
        if (age < 18) {
            return helpers.message('Age must be at least 18 years old');
        }
        return value;
    }),
    blood: Joi.number().valid(1, 2, 3, 4).required(),
    sex: Joi.string().valid('male', 'female'),
    levelActivity: Joi.number().valid(1, 2, 3, 4, 5).required()
});
const userUpdateJoiSchema = Joi.object({
    dailyCalorie: Joi.number(),
    dailyExerciseTime: Joi.number(),
    _id: Joi.string(),
    name: Joi.string().min(3),
    avatar: Joi.string(),
    height: Joi.number().min(150),
    currentWeight: Joi.number().min(35),
    desiredWeight: Joi.number().min(35),
    birthday: Joi.date().iso().max('now').raw().custom((value, helpers) => {
        const age = new Date().getFullYear() - new Date(value).getFullYear();
        if (age < 18) {
            return helpers.message('Age must be at least 18 years old');
        }
        return value;
    }),
    blood: Joi.number().valid(1, 2, 3, 4),
    sex: Joi.string().valid('male', 'female'),
    levelActivity: Joi.number().valid(1, 2, 3, 4, 5),
    email: Joi.string().email(),
});
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: emailRegex,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Set password for user'],
        minlength: 6,
    },
    token: {
        type: String,
        default: "",
    },
    dailyCalorie: {
        type: Number,
        default: null
    },
    dailyExerciseTime: {
        type: Number,
        default: null
    },
    bodyData: {
        height: {
            type: Number,
            min: 150
        },
        currentWeight: {
            type: Number,
            min: 35
        },
        desiredWeight: {
            type: Number,
            min: 35
        },
        birthday: {
            type: Date,
            validate: {
                validator: function (value) {
                    const age = new Date().getFullYear() - value.getFullYear();
                    return age >= 18;
                },
                message: 'User must be older than 18 years'
            }
        },
        blood: {
            type: Number,
            enum: [1, 2, 3, 4]
        },
        sex: {
            type: String,
            enum: ['male', 'female']
        },
        levelActivity: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },
        avatar: {
            type: String
        }

    }
}, { versionKey: false, timestamps: true });



userSchema.post('save', handleMongooseError);

const User = model("user", userSchema);

module.exports = {
    User,
    registerSchema,
    loginSchema,
    userJoiSchema,
    userUpdateJoiSchema
};