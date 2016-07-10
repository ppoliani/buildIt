import * as React from 'react';
import * as classNames from 'classnames';

const TabHeader = ({ key, day, isSelected }) => (
    <div className={classNames('c-tab-header', 'o-flex', 'o-column', 'o-flex-1', { 'c-tab-header--active': isSelected })}>
        <div>{day.date.format('ddd')}</div>
        <div className="o-flex o-row">
            <span className="o-flex-1">
                <img src={`${ICON_URI}/${day.icon}.png`} alt="Weather Icon" />
            </span>
            <div className="o-flex-1">
                <div>{day.temp.min} °C</div>
                <div>{day.temp.max} °C</div>
            </div>
        </div>
    </div>
);

export default TabHeader;
