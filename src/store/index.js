// @flow
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import data from './reducers/data';
import user from './reducers/user';
import AppRoute from '../router';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);
const nav = createNavigationReducer(AppRoute);
const rootReducer = combineReducers({
  nav,
  data,
  user,
});

export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    applyMiddleware(middleware)
  )
);
