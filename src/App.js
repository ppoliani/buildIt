"use strict";
var React = require('react');
var react_1 = require('react');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("section", null, "Hello ", this.props.name));
    };
    return App;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=App.js.map