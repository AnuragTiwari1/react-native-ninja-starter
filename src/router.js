// @flow
import { createStackNavigator } from 'react-navigation';
import login from './screens/login';
import landing from './screens/landing';

const AppRoute = createStackNavigator(
  {
    Login: { screen: login },
    Landing: { screen: landing },
  },
  {
    initialRouteName: 'Login',
  }
);
export default AppRoute;
