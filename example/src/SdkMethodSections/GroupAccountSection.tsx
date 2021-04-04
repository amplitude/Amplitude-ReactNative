import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useAmplitude } from '../utils/amplitude';
import { SdkSectionLayout } from './SdkSectionLayout';

export const GroupAccountSection = () => {
  const [groupType, setGroupType] = React.useState<string>('');
  const [groupValue, setGroupValue] = React.useState<string>('');

  const amplitude = useAmplitude();

  return (
    <SdkSectionLayout heading={'Group / Account'}>
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
      <Button
        style={styles.button}
        title={'Set Group'}
        disabled={!groupType || !groupValue}
        onPress={() => {
          amplitude.setGroup(groupType, groupValue);
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
    width: '40%',
  },
});
