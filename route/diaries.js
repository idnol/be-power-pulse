const express = require("express");
const { validateBody, validateUserRights } = require("../middlewar");
const authenticate = require("../middlewar/authenticate");
const {addProduct} = require("../controller/diaries");

const router = express.Router();

router.post("/product", addProduct);

module.exports = router;