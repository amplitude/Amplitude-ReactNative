import * as React from 'react';
import { StyleProp } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import { DARK_GRAY } from '../utils/constants';

interface Props {
  heading: string;
  children: React.ReactNode;
  bodyContainerStyle?: StyleProp<any>;
}

export const SdkSectionLayout = ({
  children,
  heading,
  bodyContainerStyle,
}: Props) => (
  <View style={styles.container}>
    <Text style={styles.heading}>{heading}</Text>
    <View
      style={StyleSheet.compose(
        styles.body,
        bodyContainerStyle && bodyContainerStyle,
      )}
    >
      {children}
    </View>
    <Divider style={styles.divider} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
    color: DARK_GRAY,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  divider: {
    height: 1,
    width: '100%',
    color: '#323131',
    marginTop: 5,
  },
  body: {
    paddingBottom: 10,
  },
});
