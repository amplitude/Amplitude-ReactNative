import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';

import { Amplitude } from '@amplitude/react-native';

const instance = Amplitude.getInstance();
instance.init('9c9566b48da3f559498fd70b164303b8');

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title={'Log an event!'}
        onPress={() => {
          Amplitude.getInstance()
            .logEvent('Test Event 2000')
            .then((res) => {
              console.warn({ res });
            });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
