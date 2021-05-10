import * as React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useAmplitude } from '../utils/amplitude';

import { SdkSectionLayout } from './SdkSectionLayout';

const DEFAULT_MIN_TIME_BETWEEN_MILLIS = 5 * 60 * 1000;

export const SessionsSection = () => {
  const [
    minTimeBetweenSessionsMillis,
    setMinTimeBetweenSessionsMillis,
  ] = React.useState<number>(DEFAULT_MIN_TIME_BETWEEN_MILLIS);

  const amplitude = useAmplitude();

  return (
    <SdkSectionLayout heading={'Sessions'}>
      <View pointerEvents="none">
        <Input
          label={'Min Time Between Sessions (ms)'}
          value={`${minTimeBetweenSessionsMillis}${
            minTimeBetweenSessionsMillis === DEFAULT_MIN_TIME_BETWEEN_MILLIS
              ? ' (5 min default)'
              : ''
          }`}
          editable={false}
        />
      </View>
      <Input
        placeholder={'Enter Min Time Between Sessions in Milliseconds'}
        onChangeText={(text) => setMinTimeBetweenSessionsMillis(Number(text))}
        value={`${minTimeBetweenSessionsMillis}`}
      />
      <Button
        title="Set Min Time Between Sessions (milliseconds)"
        disabled={
          minTimeBetweenSessionsMillis === DEFAULT_MIN_TIME_BETWEEN_MILLIS
        }
        onPress={() => {
          amplitude.setMinTimeBetweenSessionsMillis(
            minTimeBetweenSessionsMillis,
          );
        }}
      />
    </SdkSectionLayout>
  );
};
