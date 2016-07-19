import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {IEntry} from '../data/weather';
import TabHeader from './TabHeader';
import TabContent from './TabContent';
import { selectTab } from '../data/actions';

interface ITabSelectorProps {
    entries : Array<Array<IEntry>>;
    onClick: (selected) => void;
    selectedTab: Number;
}

class TabSelector extends Component<ITabSelectorProps, {}> {
    static isSelected(props, index) {
        return props.selectedTab === index;
    }
    render() {
        const { entries } = this.props;

        return <div className="c-tab-selector o-flex o-column">
            <div className="c-tab-selector__header o-flex o-row">
                {
                    entries.map((e, i) =>
                        <TabHeader key={i}
                                   index={i}
                                   dayEntries={e}
                                   isSelected={TabSelector.isSelected(this.props, i)}
                                   onClick={this.props.onClick}
                        />)
                }
            </div>
            <div className="c-tab-selector__body">
                {
                    entries.map((e, i) =>
                        <TabContent key={i}
                                    dayEntries={e}
                                    isSelected={TabSelector.isSelected(this.props, i)}
                        />)
                }
            </div>
        </div>
    }
}

const mapDispatchToProps = dispatch => ({
    onClick: index => dispatch(selectTab(index))
});

export default connect(
    state => ({  selectedTab: state.selectedTab }),
    mapDispatchToProps
)(TabSelector);
