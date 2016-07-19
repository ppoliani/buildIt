import { fetchForecast } from '../services/utils';

const FETCH_DATA = 'FETCH_DATA';
export const SET_DATA = 'SET_DATA';
export const SELECT_TAB = 'SELECT_TAB';

export const fetchData = () => dispatch => {
    fetchForecast().then(data => {
        dispatch(setData(data));
    });
};

export const setData = (data) => ({
    type: SET_DATA,
    data
});

export const selectTab = index => ({
    type: SELECT_TAB,
    data: index
});
