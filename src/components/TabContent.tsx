import * as React from 'react';
import * as classNames from 'classnames';
import { IEntry } from "../data/weather";

type ITabContentProps = {
    key?: number
    dayEntries: Array<IEntry>
    isSelected: boolean
}

const TabContent = ({ dayEntries, isSelected }: ITabContentProps) => {
    const maxWidth = `${100 / dayEntries.length}%`;

    return <div className={classNames('c-tab-content', 'o-flex', 'o-row', { 'c-tab-content--active': isSelected })}>
        {
            dayEntries.map(
                (dayEntry, i) =>
                    <div key={i} className="o-flex o-column o-flex-1 o-flex-center c-tab-content__item" style={{maxWidth}}>
                        <span>{dayEntry.date.format('HH:00')}</span>
                        <img width="50px" height="50px" src={`${ICON_URI}/${dayEntry.icon}.png`} alt="Weather Icon" />
                        <span>{dayEntry.temp.max} °C</span>
                    </div>
            )
        }
    </div>
};

export default TabContent;
