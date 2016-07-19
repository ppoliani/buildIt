import 'ts-helpers';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './data/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App weather={data} />
    </Provider>,
    document.getElementById('root')
);

fetchForecast()
    .then(data => {
        render(<App weather={data} />, document.getElementById('root'));
    });
