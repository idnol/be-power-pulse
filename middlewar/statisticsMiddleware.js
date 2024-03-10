const getStatisticsInfo = require("../controller/statistics");

const statisticsMiddleware = (req, res, next) => {
    return getStatisticsInfo(req, res, next);
};

module.exports = statisticsMiddleware;