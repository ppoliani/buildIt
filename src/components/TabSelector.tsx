import * as React from 'react';
import { Component } from 'react';
import {IEntry} from '../data/weather';
import TabHeader from './TabHeader';
import TabContent from './TabContent';

interface ITabSelectorProps {
    entries : Array<Array<IEntry>>
}

class TabSelector extends Component<ITabSelectorProps, {}> {
    render() {
        const { entries } = this.props;

        return <div className="c-tab-selector">
            <div className="c-tab-selector__header">
                { entries.map((d, i) => <TabHeader key={i} day={d} />) }
            </div>
            <div className="c-tab-selector__body">
                { entries.map((d, i) => <TabContent key={i} day={d} />) }
            </div>
        </div>
    }
}

export default TabSelector;
