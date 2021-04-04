import * as React from 'react';
import { Button } from 'react-native-elements';
import { useAmplitude } from '../utils/amplitude';

import { SdkSectionLayout } from './SdkSectionLayout';

export const DeviceIDSection = () => {
  const amplitude = useAmplitude();

  return (
    <SdkSectionLayout heading={'Device ID'}>
      <Button
        title={'Regenerate Device ID'}
        onPress={() => {
          amplitude.regenerateDeviceId();
        }}
      />
    </SdkSectionLayout>
  );
};
