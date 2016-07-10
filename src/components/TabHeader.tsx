import * as React from 'react';

const TabHeader = props => (
    <div className="c-tab-header o-flex o-column o-flex-1">
        <div>{props.day[0].date.format('ddd')}</div>
        <div className="o-flex o-row"></div>
    </div>
);

export default TabHeader;
