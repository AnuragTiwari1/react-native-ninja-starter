// @flow
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import data from './reducers/data';
import user from './reducers/user';

const rootReducer = combineReducers({
  data,
  user,
});

export default createStore(rootReducer, {}, compose(applyMiddleware(thunk)));
