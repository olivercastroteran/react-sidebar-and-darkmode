import { combineReducers } from 'redux';
import { navReducer } from './navReducer';
import { darkModeReducer } from './darkModeReducer';

const rootReducer = combineReducers({
  nav: navReducer,
  dark: darkModeReducer,
});

export default rootReducer;
