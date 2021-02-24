import * as React from 'react';
import { Input, Button } from 'react-native-elements';
import { amplitudeInstance } from '../utils/amplitude';
import { StyleSheet } from 'react-native';

import { SdkSectionLayout } from './SdkSectionLayout';

export const EventSection = () => {
  const [eventName, setEventName] = React.useState<string>('');
  return (
    <SdkSectionLayout heading={'Event'}>
      <Input
        placeholder={'Event Name'}
        value={eventName}
        onChangeText={setEventName}
        containerStyle={styles.inputContainer}
      />
      <Button
        style={styles.button}
        title={'Send Event'}
        disabled={!eventName}
        onPress={() => {
          amplitudeInstance.logEvent(eventName);
        }}
      />
    </SdkSectionLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '30%',
  },
  inputContainer: {
    marginLeft: -5,
  },
});
