const {wrapper} = require("../../middlewar");
const getStatisticsInfo = require("./getStatisticsInfo");

module.exports = { getStatisticsInfo: wrapper(getStatisticsInfo) }