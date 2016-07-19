const FETCH_DATA = 'FETCH_DATA';
const SELECT_TAB = 'SELECT_TAB';

export const fetchData = () => dispatch => {

};

export const selectTab = index => ({
    type: SELECT_TAB,
    index
});
