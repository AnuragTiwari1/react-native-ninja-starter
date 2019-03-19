// @flow
import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const Login = () => {
  return <Text>Login Page</Text>;
};

export default connect((state: Object) => ({
  nav: state.nav,
}))(Login);
