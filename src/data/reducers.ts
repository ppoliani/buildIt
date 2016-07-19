import { combineReducers } from 'redux';

type Action = {
    type: string;
    data: any;
}


const weatherData = (state = {}, action: Action) => {
    return state;
};

const selectedTab = (state = 0, action: Action) => {
    return state;
};

export default combineReducers({
    weatherData,
    selectedTab,
});
