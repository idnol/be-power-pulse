const express = require("express")
const authenticate = require("../middlewar/authenticate")

const {getAll, getAllFilters} = require("../controller/exercises")
const router = express.Router();

router.get("/", authenticate, getAll)
router.get("/filters", authenticate, getAllFilters)

module.exports = router