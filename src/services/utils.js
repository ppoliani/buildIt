"use strict";
var NProgress = require('nprogress-npm');
var moment = require('moment');
/**
 * Returns a tuple IEntry*Number including the index of the previous entry
 */
var getPrev = function (arr) { return arr.length >= 1 ? [arr[arr.length - 1], arr.length - 1] : undefined; };
var isSameDay = function (dayA, dayB) { return dayA.diff(dayB, 'days') === 0; };
var sort = function (entries) { return entries.sort(function (a, b) { return a.date.diff(b.date); }); };
var groupByDays = function (entries) {
    return entries.reduce(function (acc, entry) {
        var prevEntry = getPrev(acc);
        // similar to  fp pattern matching
        switch (prevEntry) {
            case undefined:
                acc.push([entry]);
                break;
            default:
                if (isSameDay(entry.date, prevEntry[0][0].date)) {
                    acc[prevEntry[1]].push(entry);
                }
                else {
                    acc.push([entry]);
                }
        }
        return acc;
    }, []);
};
var transformList = function (_a) {
    var list = _a.list;
    return list.map(function (item) { return ({
        date: moment(item.dt_txt),
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
    entries: groupByDays(sort(transformList(data)))
}); };
exports.fetchForecast = function () {
    NProgress.start();
    return fetch("" + API_URL)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        NProgress.done();
        return transformData(data);
    });
};
//# sourceMappingURL=utils.js.map