const express = require('express');
const { registerSchema, loginSchema } = require('../model/users');
const validateBody = require('../middlewar/validateBody');
const { register, login, logout, getCurrent } = require('../controller/users');
const { authenticate } = require('../middlewar');

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerSchema), register);
usersRouter.post("/login", validateBody(loginSchema), login);
usersRouter.post("/logout", authenticate, logout);
usersRouter.get("/current", authenticate, getCurrent);

module.exports = usersRouter;
