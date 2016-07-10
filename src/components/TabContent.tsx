import * as React from 'react';
import * as classNames from 'classnames';
import { IEntry } from "../data/weather";

type ITabContentProps = {
    key?: number
    dayEntries: Array<IEntry>
    isSelected: boolean
}

const TabContent = ({ dayEntries, isSelected }: ITabContentProps) => (
    <div className={classNames('c-tab-content', { 'c-tab-content--active': isSelected })}>
        {dayEntries[0].date.format('HH:hh')} 
    </div>
);

export default TabContent;
