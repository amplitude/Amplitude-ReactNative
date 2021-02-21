import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { Amplitude } from '@amplitude/react-native';
import { AppHeader } from './AppHeader';

const instance = Amplitude.getInstance();
instance.init('9c9566b48da3f559498fd70b164303b8');

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
