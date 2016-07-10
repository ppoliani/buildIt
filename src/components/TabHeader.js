"use strict";
var React = require('react');
var classNames = require('classnames');
var findMinTemp = function (dayEntries) { return Math.min.apply(Math, (dayEntries.map(function (e) { return e.temp.max; }))); };
var findMaxTemp = function (dayEntries) { return Math.max.apply(Math, (dayEntries.map(function (e) { return e.temp.max; }))); };
var TabHeader = function (_a) {
    var key = _a.key, dayEntries = _a.dayEntries, isSelected = _a.isSelected;
    return (React.createElement("div", {className: classNames('c-tab-header', 'o-flex', 'o-column', 'o-flex-1', { 'c-tab-header--active': isSelected })}, React.createElement("div", null, dayEntries[0].date.format('ddd')), React.createElement("div", {className: "o-flex o-row"}, React.createElement("span", {className: "o-flex-1"}, React.createElement("img", {src: ICON_URI + "/" + dayEntries[0].icon + ".png", alt: "Weather Icon"})), React.createElement("div", {className: "o-flex-1"}, React.createElement("div", null, findMinTemp(dayEntries), " °C"), React.createElement("div", null, findMaxTemp(dayEntries), " °C")))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabHeader;
//# sourceMappingURL=TabHeader.js.map