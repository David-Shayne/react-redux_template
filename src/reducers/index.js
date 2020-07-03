import { combineReducers } from 'redux';
import primaryReducer from './primaryReducer';

const rootReducer = combineReducers({ primaryReducer: primaryReducer });

export default rootReducer;
