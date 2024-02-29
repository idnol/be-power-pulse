const express = require("express");
const { validateBody, validateUserRights } = require("../middlewar");
const authenticate = require("../middlewar/authenticate");
const {getAll, getRecommended} = require("../controller/products");

const router = express.Router();

router.get("/", getAll);
router.get("/recommended", getRecommended);

module.exports = router;