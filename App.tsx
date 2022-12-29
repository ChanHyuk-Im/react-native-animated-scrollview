/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native';

const App = () => {
  const scrolling = React.useRef(new Animated.Value(0)).current;
  const height = scrolling.interpolate({
    inputRange: [0, 200],
    outputRange: [200, 50],
    extrapolate: 'clamp',
  });
  const fontSize = scrolling.interpolate({
    inputRange: [0, 200],
    outputRange: [32, 16],
    extrapolate: 'clamp',
  });

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrolling.setValue(e.nativeEvent.contentOffset.y);
  };

  return (
    <SafeAreaView>
      <Animated.View style={{...styles.animatedHeaderContainer, height}}>
        <Animated.Text style={{...styles.animatedHeaderText, fontSize}}>Animated Header</Animated.Text>
      </Animated.View>
      <Animated.ScrollView
        contentInsetAdjustmentBehavior="automatic"
        onScroll={onScroll}
        scrollEventThrottle={10}>
        {Array(20).fill(0).map((_, index) => {
          return (
            <View key={index} style={styles.listItemContainer}>
              <Text style={{color: 'black'}}>{`item${index}`}</Text>
            </View>
          );
        })}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  animatedHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  animatedHeaderText: {
    color: 'black',
  },
  listItemContainer: {
    height: 100,
    marginVertical: 10,
    backgroundColor: 'lightgray',
  },
});

export default App;
