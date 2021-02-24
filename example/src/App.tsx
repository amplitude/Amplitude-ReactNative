import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
