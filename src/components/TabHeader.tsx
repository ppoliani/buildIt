import * as React from 'react';
import * as classNames from 'classnames';
import { IEntry } from "../data/weather";

type ITabHeaderProps = {
    key?: number
    index: number
    dayEntries: Array<IEntry>
    isSelected: boolean
    onClick: (selected) => void
}


const findMinTemp = dayEntries => Math.min(...(dayEntries.map(e => e.temp.max)));
const findMaxTemp = dayEntries => Math.max(...(dayEntries.map(e => e.temp.max)));
const handleClick = props => () => props.onClick(props.index);

const TabHeader = (props: ITabHeaderProps) => (
    <div className={classNames('c-tab-header', 'o-flex', 'o-column', 'o-flex-1', { 'c-tab-header--active': props.isSelected })} onClick={handleClick(props)}>
        <div>{props.dayEntries[0].date.format('ddd')}</div>
        <div className="o-flex o-row">
            <span className="o-flex-1">
                <img src={`${ICON_URI}/${props.dayEntries[0].icon}.png`} alt="Weather Icon" />
            </span>
            <div className="o-flex-1">
                <div>{findMinTemp(props.dayEntries)} °C</div>
                <div>{findMaxTemp(props.dayEntries)} °C</div>
            </div>
        </div>
    </div>
);

export default TabHeader;
