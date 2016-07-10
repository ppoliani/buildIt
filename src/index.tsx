import 'ts-helpers';
import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import { fetchForecast } from './services/utils';

fetchForecast()
    .then(data => {
        console.log(data);
        render(<App name="Pavloss" />, document.getElementById('root'));
    });
