const express = require('express');
const { registerSchema } = require('../model/users');
const validateBody = require('../middlewar/validateBody');
const { register } = require('../controller/users');

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerSchema), register);

module.exports = usersRouter;
