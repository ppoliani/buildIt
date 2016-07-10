import * as React from 'react';
import { Component } from 'react';
import {IEntry} from '../data/weather';
import TabHeader from './TabHeader';
import TabContent from './TabContent';

interface ITabSelectorProps {
    entries : Array<Array<IEntry>>
}

class TabSelector extends Component<ITabSelectorProps, {}> {
    constructor(props, state) {
        super(props, state);

        this.state = {
            selected: 0
        }
    }

    static isSelected(state, index) {
        return state.selected === index;
    }

    render() {
        const { entries } = this.props;

        return <div className="c-tab-selector o-flex o-column">
            <div className="c-tab-selector__header o-flex o-row">
                { entries.map((e, i) => <TabHeader key={i} dayEntries={e} isSelected={TabSelector.isSelected(this.state, i)} />) }
            </div>
            <div className="c-tab-selector__body">
                { entries.map((e, i) => <TabContent key={i} dayEntries={e} isSelected={TabSelector.isSelected(this.state, i)} />) }
            </div>
        </div>
    }
}

export default TabSelector;
