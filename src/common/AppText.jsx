import React from 'react';
import { Text, StyleSheet } from 'react-native';
import getFontStyleObject from '../utils/font';
import Theme from '../Theme';

// type PropTypes = {
//   type?: string,
//   children?: any,
//   style?: any,
// };

const styles = StyleSheet.create({
  text: {
    color: Theme.gray.lightest,
    ...getFontStyleObject(),
  },
});

const AppText = props => {
  const { children, style, type, ...rest } = props;

  const textStyles = [styles.text, Theme.typography[type], style];

  return (
    <Text {...rest} style={textStyles}>
      {children}
    </Text>
  );
};

// AppText.defaultProps = {
//   type: 'body',
//   children: null,
//   style: null,
// };

export default AppText;
