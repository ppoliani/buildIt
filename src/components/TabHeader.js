"use strict";
var React = require('react');
var classNames = require('classnames');
var TabHeader = function (_a) {
    var key = _a.key, day = _a.day, isSelected = _a.isSelected;
    return (React.createElement("div", {className: classNames('c-tab-header', 'o-flex', 'o-column', 'o-flex-1', { 'c-tab-header--active': isSelected })}, React.createElement("div", null, day.date.format('ddd')), React.createElement("div", {className: "o-flex o-row"}, React.createElement("span", {className: "o-flex-1"}, React.createElement("img", {src: ICON_URI + "/" + day.icon + ".png", alt: "Weather Icon"})), React.createElement("div", {className: "o-flex-1"}, React.createElement("div", null, day.temp.min, " °C"), React.createElement("div", null, day.temp.max, " °C")))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabHeader;
//# sourceMappingURL=TabHeader.js.map