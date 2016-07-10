"use strict";
var NProgress = require('nprogress-npm');
var moment = require('moment');
var transformList = function (_a) {
    var list = _a.list;
    return list.map(function (item) { return ({
        date: moment(item.dt),
        temp: {
            min: item.main.temp_min,
            max: item.main.temp_max
        },
        humidity: item.main.humidity,
        icon: item.weather[0].icon,
        wind: {
            speed: item.wind.speed,
            deg: item.wind.deg
        }
    }); });
};
/**
 * transforms the data we receive from the service to a data
 * structure that our app understands.
 */
var transformData = function (data) { return ({
    city: data.city.name,
    entries: transformList(data)
}); };
exports.fetchForecast = function () {
    NProgress.start();
    return fetch("" + API_URL)
        .then(function (response) { return response.json(); })
        .then(transformData)
        .then(NProgress.done);
};
//# sourceMappingURL=utils.js.map