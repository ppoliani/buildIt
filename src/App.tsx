import * as React from 'react';
import { Component } from 'react';

interface IAppProps {
    name: string
}

class App extends Component<IAppProps, any> {
    render() {
        return (
            <section>
                Hello {this.props.name}
            </section>
        );
    }
}

export default App;
