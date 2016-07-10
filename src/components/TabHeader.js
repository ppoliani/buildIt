"use strict";
var React = require('react');
var classNames = require('classnames');
var findMinTemp = function (dayEntries) { return Math.min.apply(Math, (dayEntries.map(function (e) { return e.temp.max; }))); };
var findMaxTemp = function (dayEntries) { return Math.max.apply(Math, (dayEntries.map(function (e) { return e.temp.max; }))); };
var handleClick = function (props) { return function () { return props.onClick(props.index); }; };
var TabHeader = function (props) { return (React.createElement("div", {className: classNames('c-tab-header', 'o-flex', 'o-column', 'o-flex-1', { 'c-tab-header--active': props.isSelected }), onClick: handleClick(props)}, React.createElement("div", null, props.dayEntries[0].date.format('ddd')), React.createElement("div", {className: "o-flex o-row"}, React.createElement("span", {className: "o-flex-1"}, React.createElement("img", {src: ICON_URI + "/" + props.dayEntries[0].icon + ".png", alt: "Weather Icon"})), React.createElement("div", {className: "o-flex-1"}, React.createElement("div", null, findMinTemp(props.dayEntries), " °C"), React.createElement("div", null, findMaxTemp(props.dayEntries), " °C"))))); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabHeader;
//# sourceMappingURL=TabHeader.js.map