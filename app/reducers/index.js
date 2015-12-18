import { combineReducers } from 'redux';
import login from './login/reducer';
import menu from './menu/reducer';

const rootReducer = combineReducers({
  login,
  menu
});

export default rootReducer;
