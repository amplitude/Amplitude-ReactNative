import * as React from 'react';
import { Input, Button } from 'react-native-elements';
import { amplitudeInstance } from '../utils/amplitude';

import { SdkSectionLayout } from './SdkSectionLayout';

export const UserIDSection = () => {
  const [userId, setUserId] = React.useState<string>('');
  return (
    <SdkSectionLayout heading={'User ID'}>
      <Input
        placeholder={'Enter User ID to set'}
        onChangeText={setUserId}
        value={userId}
      />
      <Button
        title="Set User ID"
        onPress={() => {
          if (userId.length > 0) {
            amplitudeInstance.setUserId(userId);
          }
        }}
      />
    </SdkSectionLayout>
  );
};
