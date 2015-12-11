import { combineReducers } from 'redux';
import login from './login/loginReducer';
// import global from './global/globalReducer';

const rootReducer = combineReducers({
  login
});

export default rootReducer;
