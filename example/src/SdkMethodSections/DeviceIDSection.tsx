import * as React from 'react';
import { Button, Input } from 'react-native-elements';
import { View } from 'react-native';
import { SdkSectionLayout } from './SdkSectionLayout';
import { useAmplitude } from '../utils/amplitude';

export const DeviceIDSection = () => {
  const amplitude = useAmplitude();
  const [currentDeviceId, setCurrentDeviceId] = React.useState('');
  const [loading, updateLoading] = React.useState(true);

  const handleRegenerateDeviceId = () => {
    amplitude.regenerateDeviceId();
    updateLoading(true);
  };

  const getDeviceId = React.useCallback(async () => {
    const deviceId = await amplitude.getDeviceId();
    setCurrentDeviceId(deviceId);
    updateLoading(false);
  }, [amplitude]);

  React.useEffect(() => {
    if (loading) getDeviceId();
  }, [getDeviceId, loading]);

  return (
    <SdkSectionLayout heading={'Device ID'}>
      <View pointerEvents="none">
        <Input value={currentDeviceId} editable={false} />
      </View>
      <Button
        title={'Regenerate Device ID'}
        onPress={handleRegenerateDeviceId}
      />
    </SdkSectionLayout>
  );
};
