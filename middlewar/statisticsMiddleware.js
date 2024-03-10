const getStatisticsInfo = require("../controller/statistics");

const statisticsMiddleware = (req, res, next) => {

    if (req.path === '/' || req.path === '/users/register' || req.path === '/users/login') {

        const isEmptyBody = !req.body || Object.keys(req.body).length === 0;
        if (isEmptyBody) {
            return getStatisticsInfo(req, res, next);
        }
    }

    next();
};

module.exports = statisticsMiddleware;