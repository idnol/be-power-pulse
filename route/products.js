const express = require("express");
const { validateBody, validateUserRights } = require("../middlewar");
const authenticate = require("../middlewar/authenticate");
const {getAll, getCategories} = require("../controller/products");

const router = express.Router();

router.get("/", getAll);
router.get("/categories", getCategories);

module.exports = router;