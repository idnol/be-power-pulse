const express = require("express")

// const authenticate = require("../middlewar/authenticate")

const {getAll, getAllFilters} = require("../controller/exercises")
const router = express.Router();

router.get("/", getAll)
router.get("/filters/", getAllFilters)

module.exports = router