import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { initAmplitude } from './utils/amplitude';
import { AppHeader } from './AppHeader';
import {
  UserIDSection,
  DeviceIDSection,
  EventSection,
  IdentifySection,
  GroupAccountSection,
  GroupIdentifySection,
  FlushEventsSection,
  RevenueSection,
} from './SdkMethodSections';

initAmplitude();

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <AppHeader />
        <UserIDSection />
        <DeviceIDSection />
        <EventSection />
        <IdentifySection />
        <GroupAccountSection />
        <GroupIdentifySection />
        <RevenueSection />
        <FlushEventsSection />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
