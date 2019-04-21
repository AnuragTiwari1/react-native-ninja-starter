import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Animated } from 'react-native';
import AppText from '../common/AppText';

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 0,
    maxWidth: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row-reverse',
  },
});

class Header extends React.PureComponent {
  render() {
    const { scene, navigation, backgroundStyle } = this.props;
    // Get properties from static object navigationOptions
    const navigationOptions = scene ? scene.descriptor.options : {};
    const { title, headerLeft, headerRight } = navigationOptions;
    const routeName = navigation ? navigation.state.routeName : '';
    const routeIndex = scene ? scene.index : 0;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.background, backgroundStyle]} />
        <View style={styles.headerWrapper}>
          <View style={styles.leftContainer}>
            {headerLeft ? headerLeft() : null}
          </View>
          <View style={styles.titleContainer}>
            <AppText numberOfLines={1} type="header">
              {title || routeName}
            </AppText>
          </View>
          <View style={styles.rightContainer}>
            {headerRight ? headerRight() : null}
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(Header);
