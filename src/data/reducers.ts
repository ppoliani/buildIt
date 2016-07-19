import { combineReducers } from 'redux';
import { SET_DATA, SELECT_TAB } from './actions';

type Action = {
    type: string;
    data: any;
}


const weather = (state = { entries: [] }, action: Action) => {
    switch (action.type) {
        case SET_DATA:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
};

const selectedTab = (state = 0, action: Action) => {
    switch (action.type) {
        case SELECT_TAB:
            return action.data;
        default:
            return state;
    }
};

export default combineReducers({
    weather,
    selectedTab,
});
