import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import userDataReducer from './reducers/userDataReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  userData: userDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
