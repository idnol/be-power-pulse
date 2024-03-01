const express = require("express");
const { validateBody, validateUserRights } = require("../middlewar");
const authenticate = require("../middlewar/authenticate");
const {addProduct, addExercise} = require("../controller/diaries");

const router = express.Router();

router.post("/product", addProduct);
router.post("/exercise", addExercise);

module.exports = router;