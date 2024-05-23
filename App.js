/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MyComponent from './src/component/MyComponent';
import {data} from './src/constant';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyComponent data={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
