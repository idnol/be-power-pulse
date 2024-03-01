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
    token: Joi.string(),
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

const updateSchema = Joi.object({
    name: Joi.string()
        .empty(false)
        .messages({
            "any.required": "The name field is required.",
            "string.empty": "The name must not be empty",
        }),
    avatar: Joi.string().empty(false).messages({
        "string.empty": "The avatar must not be empty",
    }),
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
    token: String,
    avatarURL: {
        type: String,
        required: true,
    },
}, { versionKey: false, timestamps: true });

userSchema.post('save', handleMongooseError);

const User = model("user", userSchema);

module.exports = {
    User,
    registerSchema,
    loginSchema,
    updateSchema,
};