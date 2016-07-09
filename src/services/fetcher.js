"use strict";
exports.fetchForecast = function () {
    return fetch("" + API_URL)
        .then(function (response) { return response.text(); });
};
//# sourceMappingURL=fetcher.js.map