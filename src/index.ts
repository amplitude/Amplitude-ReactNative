import { NativeModules } from "react-native";

const { RNAmplitudeReactNative } = NativeModules;

type ExampleResult = "amp" | "amplitude" | "amplitude react native";

export function example(): ExampleResult {
  return "amp";
}

export default RNAmplitudeReactNative;
