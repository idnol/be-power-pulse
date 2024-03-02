const express = require('express');
const { registerSchema, loginSchema, userJoiSchema} = require('../model/users');
const validateBody = require('../middlewar/validateBody');
const { register, login, logout, getCurrent, updateProfile} = require('../controller/users');
const { authenticate } = require('../middlewar');

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerSchema), register);
usersRouter.post("/login", validateBody(loginSchema), login);
usersRouter.post("/logout", authenticate, logout);
usersRouter.get("/current", authenticate, getCurrent);
usersRouter.post("/profile", authenticate, validateBody(userJoiSchema), updateProfile);

module.exports = usersRouter;
