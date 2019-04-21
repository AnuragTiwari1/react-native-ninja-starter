// @flow
import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import login from './screens/login';
import Landing from './screens/landing';
import Signup from './screens/signup';
import Header from './component/Header';
import AuthHeader from './component/AuthHeader';
import getFontStyleObject from './utils/font';
import Theme from './Theme';

const defaultHeaderObject = {
  header: ({ scene }) => <Header scene={scene} />,
};
const AppRoute = createAppContainer(
  createStackNavigator(
    {
      Auth: {
        screen: createMaterialTopTabNavigator(
          {
            'Log In': { screen: login },
            'Sign Up': { screen: Signup },
          },
          {
            lazy: true,
            tabBarOptions: {
              style: {
                backgroundColor: '#fff',
                height: '10%',
              },
              labelStyle: {
                color: Theme.gray.darkest,
                ...getFontStyleObject('Montserrat', 'Thin'),
              },
              upperCaseLabel: false,
              indicatorStyle: {
                backgroundColor: Theme.gray.darkest,
                height: 0.77,
              },
            },
          }
        ),
        navigationOptions: ({ navigation }) => ({
          header: <AuthHeader />,
        }),
      },
      Landing: { screen: Landing },
    },
    {
      defaultNavigationOptions: { ...defaultHeaderObject },
      initialRouteName: 'Auth',
    }
  )
);
export default AppRoute;
