const NProgress = require('nprogress-npm');
import * as moment  from 'moment';
import { IWeather, IEntry } from '../data/weather';

const transformList = ({list}) =>
    list.map(
        item => ({
            date: moment(item.dt),
            temp: {
                min: item.main.temp_min,
                max: item.main.temp_max
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
 * transforms the data we receive from the service to a data
 * structure that our app understands.
 */
const transformData = data => ({
    city: data.city.name,
    entries: transformList(data)
}) as IWeather;

export const fetchForecast = () => {
    NProgress.start();

    return fetch(`${API_URL}`)
        .then(response => response.json())
        .then(transformData)
        .then(NProgress.done);
};
