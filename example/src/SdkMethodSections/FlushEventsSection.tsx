import * as React from 'react';
import { Button } from 'react-native-elements';
import { useAmplitude } from '../utils/amplitude';

import { SdkSectionLayout } from './SdkSectionLayout';

export const FlushEventsSection = () => {
  const amplitude = useAmplitude();

  return (
    <SdkSectionLayout heading={'Flush Events'}>
      <Button
        title={'Click to Flush Events'}
        onPress={() => {
          amplitude.uploadEvents();
        }}
      />
    </SdkSectionLayout>
  );
};
