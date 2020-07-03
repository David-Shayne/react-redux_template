import { GET_ACTION } from './types';

const getAction = () => dispatch => {
    dispatch({
        type: GET_ACTION,
        payload: null
    });
};
