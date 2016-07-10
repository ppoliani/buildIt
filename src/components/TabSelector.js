"use strict";
var React = require('react');
var react_1 = require('react');
var TabHeader_1 = require('./TabHeader');
var TabContent_1 = require('./TabContent');
var TabSelector = (function (_super) {
    __extends(TabSelector, _super);
    function TabSelector(props, state) {
        var _this = this;
        _super.call(this, props, state);
        this.handleClick = function (selected) {
            _this.setState({ selected: selected });
        };
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
        return React.createElement("div", {className: "c-tab-selector o-flex o-column"}, React.createElement("div", {className: "c-tab-selector__header o-flex o-row"}, entries.map(function (e, i) {
            return React.createElement(TabHeader_1.default, {key: i, index: i, dayEntries: e, isSelected: TabSelector.isSelected(_this.state, i), onClick: _this.handleClick});
        })), React.createElement("div", {className: "c-tab-selector__body"}, entries.map(function (e, i) {
            return React.createElement(TabContent_1.default, {key: i, dayEntries: e, isSelected: TabSelector.isSelected(_this.state, i)});
        })));
    };
    return TabSelector;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabSelector;
//# sourceMappingURL=TabSelector.js.map