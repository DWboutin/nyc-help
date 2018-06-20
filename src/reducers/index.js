import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import application from './application-reducer';
import dashboard from './dashboard-reducer';

const reducers = combineReducers({
  form: formReducer,
  // add other reducers here
  application,
  dashboard,
});

export default reducers;
