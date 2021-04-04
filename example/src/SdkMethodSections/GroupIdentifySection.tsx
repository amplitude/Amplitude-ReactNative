import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Identify } from '@amplitude/react-native';
import { useAmplitude } from '../utils/amplitude';
import { SdkSectionLayout } from './SdkSectionLayout';

export const GroupIdentifySection = () => {
  const [groupType, setGroupType] = React.useState<string>('');
  const [groupValue, setGroupValue] = React.useState<string>('');
  const [userPropertyKey, setUserPropertyKey] = React.useState<string>('');
  const [userPropertyValue, setUserPropertyValue] = React.useState<string>('');

  const amplitude = useAmplitude();

  return (
    <SdkSectionLayout heading={'Group Identify'}>
      <View style={styles.inputView}>
        <Input
          placeholder={'Group Type'}
          value={groupType}
          onChangeText={setGroupType}
          containerStyle={styles.input}
        />
        <Input
          placeholder={'Group Value'}
          value={groupValue}
          onChangeText={setGroupValue}
          containerStyle={styles.input}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          placeholder={'User Property Key'}
          value={userPropertyKey}
          onChangeText={setUserPropertyKey}
          containerStyle={styles.input}
        />
        <Input
          placeholder={'User Property Value'}
          value={userPropertyValue}
          onChangeText={setUserPropertyValue}
          containerStyle={styles.input}
        />
      </View>
      <Button
        style={styles.button}
        title={'Send Group Identify'}
        disabled={
          !groupType || !groupValue || !userPropertyKey || !userPropertyValue
        }
        onPress={() => {
          const identify = new Identify();
          identify.set(userPropertyKey, userPropertyValue);
          amplitude.groupIdentify(groupType, groupValue, identify);
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
    marginLeft: -5,
  },
  button: {
    width: '50%',
  },
});
