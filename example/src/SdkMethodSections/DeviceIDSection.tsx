import * as React from 'react';
import { Button } from 'react-native-elements';
import { useAmplitudeInstance } from '../utils/amplitude';

import { SdkSectionLayout } from './SdkSectionLayout';

export const DeviceIDSection = () => {
  const amplitudeInstance = useAmplitudeInstance();

  return (
    <SdkSectionLayout heading={'Device ID'}>
      <Button
        title={'Regenerate Device ID'}
        onPress={() => {
          amplitudeInstance?.regenerateDeviceId();
        }}
      />
    </SdkSectionLayout>
  );
};
