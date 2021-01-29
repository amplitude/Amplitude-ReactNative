import { NativeModules } from 'react-native';

type ReactNativeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ReactNative } = NativeModules;

export default ReactNative as ReactNativeType;
