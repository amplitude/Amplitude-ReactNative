import * as React from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { Identify } from '@amplitude/react-native';
import { SdkSectionLayout } from './SdkSectionLayout';
import { useAmplitude } from '../utils/amplitude';

export const IdentifySection = () => {
  const [propertyKey, setPropertyKey] = React.useState<string>('');
  const [propertyValue, setPropertyValue] = React.useState<string>('');

  const amplitude = useAmplitude();

  return (
    <SdkSectionLayout heading={'Identify'}>
      <View style={styles.inputView}>
        <Input
          placeholder={'User Property Key'}
          value={propertyKey}
          onChangeText={setPropertyKey}
          containerStyle={styles.input}
        />
        <Input
          placeholder={'User Property Value'}
          value={propertyValue}
          onChangeText={setPropertyValue}
          containerStyle={styles.input}
        />
      </View>
      <Button
        style={styles.button}
        title={'Send Identify'}
        disabled={!propertyKey || !propertyValue}
        onPress={() => {
          const identify = new Identify();
          identify.set(propertyKey, propertyValue);
          amplitude.identify(identify);
        }}
      />
    </SdkSectionLayout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '50%',
  },
  inputContainer: {
    width: '50%',
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: -5,
  },
  button: {
    width: '40%',
  },
});
