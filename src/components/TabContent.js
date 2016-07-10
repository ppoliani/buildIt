"use strict";
var React = require('react');
var classNames = require('classnames');
var TabContent = function (_a) {
    var dayEntries = _a.dayEntries, isSelected = _a.isSelected;
    return (React.createElement("div", {className: classNames('c-tab-content', 'o-flex', 'o-row', { 'c-tab-content--active': isSelected })}, dayEntries.map(function (dayEntry, i) {
        return React.createElement("div", {key: i, className: "o-flex o-column o-flex-1 o-flex-center c-tab-content__item"}, React.createElement("span", null, dayEntry.date.format('HH:00')), React.createElement("img", {width: "50px", height: "50px", src: ICON_URI + "/" + dayEntry.icon + ".png", alt: "Weather Icon"}), React.createElement("span", null, dayEntry.temp.max));
    })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabContent;
//# sourceMappingURL=TabContent.js.map