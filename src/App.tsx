import * as React from 'react';
import { Component } from 'react';

interface IAppProps {
    name: string
}

class App extends Component<IAppProps, any> {
    render() {
        return (
            <section className="main-content">
                <h1>Weather London</h1>
            </section>
        );
    }
}

export default App;
