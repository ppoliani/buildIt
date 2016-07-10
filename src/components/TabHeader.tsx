import * as React from 'react';
import * as classNames from 'classnames';

const findMinTemp = dayEntries => Math.min(...(dayEntries.map(e => e.temp.max)));
const findMaxTemp = dayEntries => Math.max(...(dayEntries.map(e => e.temp.max)));

const TabHeader = ({ key, dayEntries, isSelected }) => (
    <div className={classNames('c-tab-header', 'o-flex', 'o-column', 'o-flex-1', { 'c-tab-header--active': isSelected })}>
        <div>{dayEntries[0].date.format('ddd')}</div>
        <div className="o-flex o-row">
            <span className="o-flex-1">
                <img src={`${ICON_URI}/${dayEntries[0].icon}.png`} alt="Weather Icon" />
            </span>
            <div className="o-flex-1">
                <div>{findMinTemp(dayEntries)} °C</div>
                <div>{findMaxTemp(dayEntries)} °C</div>
            </div>
        </div>
    </div>
);

export default TabHeader;
