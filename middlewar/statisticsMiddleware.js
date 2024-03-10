const getStatisticsInfo = require("../controller/statistics");

const statisticsMiddleware =  (req, res, next) => {

    if (!req.body || Object.keys(req.body).length === 0) {
        return getStatisticsInfo(req, res, next);
    }
    else {
        next();
    }
};

module.exports = statisticsMiddleware;