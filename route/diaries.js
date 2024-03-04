const express = require("express");
const authenticate = require("../middlewar/authenticate");
const {addProduct, addExercise, removeProduct, removeExercise, getDiary} = require("../controller/diaries");

const router = express.Router();

router.post("/product", authenticate, addProduct);
router.post("/exercise", authenticate, addExercise);
router.delete("/product", authenticate, removeProduct);
router.delete("/exercise", authenticate, removeExercise);
router.get("/", authenticate, getDiary);

module.exports = router;