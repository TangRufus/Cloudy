import { combineReducers } from 'redux';
import login from './login/reducer';
import menu from './menu/reducer';
import zones from './zones/reducer';


const rootReducer = combineReducers({
  login,
  menu,
  zones
});

export default rootReducer;
