"use strict";
var React = require('react');
var react_1 = require('react');
var TabHeader_1 = require('./TabHeader');
var TabContent_1 = require('./TabContent');
var TabSelector = (function (_super) {
    __extends(TabSelector, _super);
    function TabSelector() {
        _super.apply(this, arguments);
    }
    TabSelector.prototype.render = function () {
        var entries = this.props.entries;
        return React.createElement("div", {className: "c-tab-selector"}, React.createElement("div", {className: "c-tab-selector__header"}, entries.map(function (d, i) { return React.createElement(TabHeader_1.default, {key: i, day: d}); })), React.createElement("div", {className: "c-tab-selector__body"}, entries.map(function (d, i) { return React.createElement(TabContent_1.default, {key: i, day: d}); })));
    };
    return TabSelector;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabSelector;
//# sourceMappingURL=TabSelector.js.map