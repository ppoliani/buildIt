"use strict";
require('ts-helpers');
var React = require('react');
var react_dom_1 = require('react-dom');
var App_1 = require('./App');
var fetcher_1 = require('./services/fetcher');
fetcher_1.fetchForecast()
    .then(function (data) {
    console.log(data);
    react_dom_1.render(React.createElement(App_1.default, {name: "Pavloss"}), document.getElementById('root'));
});
//# sourceMappingURL=index.js.map