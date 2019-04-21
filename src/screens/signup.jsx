// @flow
import React from 'react';
import { Text, View } from 'react-native';

const Signup = () => {
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      {console.log('inside render of signuo')}
      <Text>Signup</Text>
    </View>
  );
};

// Signup.navigationOptions = () => ({
//   tabBarOnPress: ({ navigation }) => {
//     navigation.navigate(navigation.state.routeName);
//   },
// });

export default Signup;
