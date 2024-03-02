const express = require("express");
const { validateBody, validateUserRights } = require("../middlewar");
const authenticate = require("../middlewar/authenticate");
const {addProduct, addExercise, removeProduct, removeExercise, getDiary} = require("../controller/diaries");

const router = express.Router();

router.post("/product", addProduct);
router.post("/exercise", addExercise);
router.delete("/product", removeProduct);
router.delete("/exercise", removeExercise);
router.get("/", getDiary);

module.exports = router;