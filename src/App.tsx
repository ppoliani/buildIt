import * as React from 'react';
import { Component } from 'react';
import { IWeather } from './data/weather';
import TabSelector from './components/TabSelector';

interface IAppProps {
    weather: IWeather
}

class App extends Component<IAppProps, any> {
    render() {
        return (
            <section className="main-content">
                <h1>Weather London</h1>
                <TabSelector [entries]="entries" />
            </section>
        );
    }
}

export default App;
