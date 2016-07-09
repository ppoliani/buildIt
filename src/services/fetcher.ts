export const fetchForecast = () => {
    return fetch(`${API_URL}`)
        .then(response => response.text());
};

