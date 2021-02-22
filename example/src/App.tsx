import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
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
      <ScrollView style={styles.container}>
        <AppHeader />
        <UserIDSection />
        <DeviceIDSection />
        <EventSection />
        <IdentifySection />
        <GroupAccountSection />
        <GroupIdentifySection />
        <RevenueSection />
        <FlushEventsSection />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
