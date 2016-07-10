import * as React from 'react';
import {IEntry} from '../data/weather';
import TabItem from './TabItem';

type TabSelectorProps = { entries : Array<Array<IEntry>> };

const TabSelector = ({ entries }: TabSelectorProps) => (
    <div className="c-tab-selector">
        {
            entries.map(
                d => <TabItem />
            )
        }
    </div>
);

export default TabSelector;
