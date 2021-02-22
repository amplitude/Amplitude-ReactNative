import * as React from 'react';
import { Button } from 'react-native-elements';
import { amplitudeInstance } from '../utils/amplitude';

import { SdkSectionLayout } from './SdkSectionLayout';

export const DeviceIDSection = () => {
  return (
    <SdkSectionLayout heading={'Device ID'}>
      <Button
        title={'Regenerate Device ID'}
        onPress={() => {
          amplitudeInstance.regenerateDeviceId();
        }}
      />
    </SdkSectionLayout>
  );
};
