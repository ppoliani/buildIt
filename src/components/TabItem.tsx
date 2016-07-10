import * as React from 'react';
import TabHeader from './TabHeader';
import TabContent from './TabContent';

const TabItem = props => (
    <div className="c-tab-item">
        <TabHeader />
        <TabContent />
    </div>
);

export default TabItem;
