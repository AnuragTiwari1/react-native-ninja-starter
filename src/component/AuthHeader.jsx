import React from 'react';
import { View } from 'react-native';
import AppText from '../common/AppText';

import Theme from '../Theme';

export default () => (
  <View
    style={{
      height: '22%',
      backgroundColor: '#e9e8f4',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
    <AppText
      type="title1"
      style={{
        color: Theme.gray.darkest,
      }}>
      SmartBotCoin
    </AppText>
  </View>
);
