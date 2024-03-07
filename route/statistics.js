const express = require("express");

const { getStatisticsInfo } = require("../controller/statistics");
const router = express.Router();
router.get("/", getStatisticsInfo);

module.exports = router;