import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

// combine all Reducers into one big Data Store
const allReducers = combineReducers({
  users: UserReducer
});
