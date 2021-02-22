import * as React from 'react';
import { Button } from 'react-native-elements';
import { amplitudeInstance } from '../utils/amplitude';

import { SdkSectionLayout } from './SdkSectionLayout';

export const FlushEventsSection = () => {
  return (
    <SdkSectionLayout heading={'Flush Events'}>
      <Button
        title={'Click to Flush Events'}
        onPress={() => {
          amplitudeInstance.uploadEvents();
        }}
      />
    </SdkSectionLayout>
  );
};
