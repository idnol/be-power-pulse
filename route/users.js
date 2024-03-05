const express = require('express');
const { registerSchema, loginSchema, userJoiSchema } = require('../model/users');
const validateBody = require('../middlewar/validateBody');
const { register, login, logout, getCurrent, updateProfile, updateAvatar } = require('../controller/users');
const { authenticate } = require('../middlewar');
const { upload } = require("../helper");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerSchema), register);
usersRouter.post("/login", validateBody(loginSchema), login);
usersRouter.post("/logout", authenticate, logout);
usersRouter.get("/current", authenticate, getCurrent);
usersRouter.patch("/profile", authenticate, validateBody(userJoiSchema), updateProfile);
usersRouter.post("/avatar", authenticate, upload.single("avatar"), updateAvatar);

module.exports = usersRouter;