import React from 'react';
import { View } from 'react-native';
import AppText from '../common/AppText';

import Logo from '../../assets/img/logo.svg';
import Theme from '../Theme';

export default () => (
  <View
    style={{
      height: '22%',
      backgroundColor: '#e9e8f4',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
    <Logo width="50%" height="50%" />
    <AppText
      type="title1"
      style={{
        color: Theme.gray.darkest,
      }}>
      SmartBotCoin
    </AppText>
  </View>
);
