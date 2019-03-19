/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  reduxifyNavigator,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import AppRoute from './src/router';
import store from './src/store';

const Navigator = reduxifyNavigator(AppRoute, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(Navigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
