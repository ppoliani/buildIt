"use strict";
var React = require('react');
var react_1 = require('react');
var TabSelector_1 = require('./components/TabSelector');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("section", {className: "main-content"}, React.createElement("h1", null, "Weather London"), React.createElement(TabSelector_1.default, {entries: this.props.weather.entries})));
    };
    return App;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=App.js.map