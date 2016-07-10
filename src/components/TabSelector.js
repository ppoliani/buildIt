"use strict";
var React = require('react');
var react_1 = require('react');
var TabHeader_1 = require('./TabHeader');
var TabContent_1 = require('./TabContent');
var TabSelector = (function (_super) {
    __extends(TabSelector, _super);
    function TabSelector(props, state) {
        _super.call(this, props, state);
        this.state = {
            selected: 0
        };
    }
    TabSelector.isSelected = function (state, index) {
        return state.selected === index;
    };
    TabSelector.prototype.render = function () {
        var _this = this;
        var entries = this.props.entries;
        return React.createElement("div", {className: "c-tab-selector o-flex o-column"}, React.createElement("div", {className: "c-tab-selector__header o-flex o-row"}, entries.map(function (d, i) { return React.createElement(TabHeader_1.default, {key: i, day: d[0], isSelected: TabSelector.isSelected(_this.state, i)}); })), React.createElement("div", {className: "c-tab-selector__body"}, entries.map(function (d, i) { return React.createElement(TabContent_1.default, {key: i, day: d[0], isSelected: TabSelector.isSelected(_this.state, i)}); })));
    };
    return TabSelector;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabSelector;
//# sourceMappingURL=TabSelector.js.map