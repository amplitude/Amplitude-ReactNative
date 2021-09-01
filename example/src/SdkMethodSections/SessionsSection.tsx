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

  const [
    savedMinTimeBetweenSessionsMillis,
    setSavedMinTimeBetweenSessionsMillis,
  ] = React.useState<number>(DEFAULT_MIN_TIME_BETWEEN_MILLIS);

  const [currentSessionId, setCurrentSessionId] = React.useState<number>(-1);

  const amplitude = useAmplitude();

  const getSessionId = React.useCallback(async () => {
    const sessionId = await amplitude.getSessionId();
    setCurrentSessionId(sessionId);
  }, [amplitude]);

  React.useEffect(() => {
    getSessionId();
  }, [getSessionId]);

  return (
    <SdkSectionLayout heading={'Sessions'}>
      <View pointerEvents="none">
        <Input
          label={'Current SessionId'}
          value={currentSessionId.toString()}
        />
      </View>
      <View pointerEvents="none">
        <Input
          label={'Min Time Between Sessions (ms)'}
          value={`${savedMinTimeBetweenSessionsMillis}${
            savedMinTimeBetweenSessionsMillis ===
            DEFAULT_MIN_TIME_BETWEEN_MILLIS
              ? ' (5 min default)'
              : ''
          }`}
          editable={false}
        />
      </View>
      <Input
        label={'New Min Time Between Sessions (ms)'}
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
          amplitude
            .setMinTimeBetweenSessionsMillis(minTimeBetweenSessionsMillis)
            .then((success) => {
              if (success) {
                setSavedMinTimeBetweenSessionsMillis(
                  minTimeBetweenSessionsMillis,
                );
              }
            });
        }}
      />
    </SdkSectionLayout>
  );
};
