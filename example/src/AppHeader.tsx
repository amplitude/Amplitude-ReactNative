import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Header } from 'react-native-elements';

export const AppHeader = () => (
  <Header
    centerComponent={<Text style={styles.header}>Amplitude React Native</Text>}
  />
);

const styles = StyleSheet.create({
  header: {
    color: '#ffffff',
    fontSize: 20,
    paddingBottom: '15%',
  },
});
