const express = require("express");
const authenticate = require("../middlewar/authenticate");
const {addProduct, addExercise, removeProduct, removeExercise, getDiary} = require("../controller/diaries");
const {validateBody} = require("../middlewar");
const {joiSchemas} = require("../model/diaries");

const router = express.Router();

router.post("/product", authenticate, validateBody(joiSchemas.addProductSchema), addProduct);
router.post("/exercise", authenticate, validateBody(joiSchemas.addExerciseSchema), addExercise);
router.delete("/product", authenticate, removeProduct);
router.delete("/exercise", authenticate, removeExercise);
router.get("/", authenticate, getDiary);

module.exports = router;