/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MyComponent from './src/component/MyComponent';

function App() {
  const data = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Smith'},
    {id: 3, name: 'Alice Johnson'},
    {id: 4, name: 'Bob Williams'},
    {id: 5, name: 'Eva Brown'},
    {id: 6, name: 'Frank Davis'},
    {id: 7, name: 'Grace Martinez'},
    {id: 8, name: 'Henry Anderson'},
    {id: 9, name: 'Ivy Taylor'},
    {id: 10, name: 'Jack Lee'},
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyComponent data={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
