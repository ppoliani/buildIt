const NProgress = require('nprogress-npm');
import * as moment  from 'moment';
import { IWeather, IEntry } from '../data/weather';

/**
 * Returns a tuple IEntry*Number including the index of the previous entry
 */
const getPrev = arr => arr.length >= 1 ? [arr[arr.length - 1], arr.length - 1] : undefined;

const isSameDay = (dayA, dayB) => dayA.isSame(dayB, 'day');

const sort = (entries: Array<IEntry>) => entries.sort((a, b) => a.date.diff(b.date));

const groupByDays = (entries: Array<IEntry>) =>
    entries.reduce(
        (acc, entry) => {
            const prevEntry = getPrev(acc);

            // similar to  fp pattern matching
            switch (prevEntry) {
                case undefined:
                    acc.push([entry]);
                    break;
                default:
                    if(isSameDay(entry.date, prevEntry[0][0].date)) {
                        acc[prevEntry[1]].push(entry);
                    }
                    else {
                        acc.push([entry]);
                    }
            }

            return acc;
        },
        []
    );

const transformList = ({list}) =>
    list.map(
        item => ({
            date: moment(item.dt_txt),
            temp: {
                min: Math.round(item.main.temp_min),
                max: Math.round(item.main.temp_max)
            },
            humidity: item.main.humidity,
            icon: item.weather[0].icon,
            wind: {
                speed: item.wind.speed,
                deg: item.wind.deg
            }
        })
    ) as Array<IEntry>;

/**
 * Transforms the data we receive from the service to a data
 * structure that our app understands.
 */
const transformData = data => ({
    city: data.city.name,
    entries: groupByDays(sort(transformList(data)))
}) as IWeather;

export const fetchForecast = () => {
    NProgress.start();

    return fetch(`${API_URL}`)
        .then(response => response.json())
        .then(data => {
            NProgress.done();

            return transformData(data);
        });
};
