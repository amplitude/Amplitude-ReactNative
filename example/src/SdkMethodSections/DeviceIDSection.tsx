import * as React from 'react';
import { Button, Input } from 'react-native-elements';
import { SdkSectionLayout } from './SdkSectionLayout';
import { useAmplitude } from '../utils/amplitude';

export const DeviceIDSection = () => {
  const amplitude = useAmplitude();
  const [currentDeviceId, setCurrentDeviceId] = React.useState('');
  const [loading, updateLoading] = React.useState(false);

  const handleOnPress = () => {
    amplitude.regenerateDeviceId();
    updateLoading(true);
  };

  const getDeviceId = React.useCallback(async () => {
    const deviceId = await amplitude.getDeviceId();
    setCurrentDeviceId(deviceId);
    updateLoading(false);
  }, [amplitude]);

  React.useEffect(() => {
    getDeviceId();
  }, [getDeviceId, loading]);

  return (
    <SdkSectionLayout heading={'Device ID'}>
      <Input value={currentDeviceId} editable={false} />
      <Button title={'Regenerate Device ID'} onPress={handleOnPress} />
    </SdkSectionLayout>
  );
};
