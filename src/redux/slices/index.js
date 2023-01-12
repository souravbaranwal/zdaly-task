import {combineReducers} from 'redux';

import {authReducer} from './auth';
import {stationsReducer} from './stations';

export const rootReducer = combineReducers({
  auth: authReducer,
  stations: stationsReducer,
});
