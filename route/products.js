const express = require("express");
const authenticate = require("../middlewar/authenticate");
const {getAll, getCategories} = require("../controller/products");

const router = express.Router();

router.get("/", authenticate, getAll);
router.get("/categories", authenticate, getCategories);

module.exports = router;