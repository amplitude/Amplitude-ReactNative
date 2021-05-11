import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { AmplitudeProvider } from './utils/amplitude';
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
  SessionsSection,
} from './SdkMethodSections';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <AmplitudeProvider>
            <AppHeader />
            <UserIDSection />
            <DeviceIDSection />
            <EventSection />
            <IdentifySection />
            <GroupAccountSection />
            <GroupIdentifySection />
            <RevenueSection />
            <FlushEventsSection />
            <SessionsSection />
          </AmplitudeProvider>
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
