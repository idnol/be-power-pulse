const {wrapper} = require("../../middlewar");
const getStatisticsInfo = require("./getStatisticsInfo");

module.exports = wrapper(getStatisticsInfo);