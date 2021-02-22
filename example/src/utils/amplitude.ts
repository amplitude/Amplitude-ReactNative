import { Amplitude } from '@amplitude/react-native';

let amplitudeInstance: Amplitude;

export const initAmplitude = (): Amplitude => {
  amplitudeInstance = Amplitude.getInstance();
  amplitudeInstance.init('9c9566b48da3f559498fd70b164303b8');

  return amplitudeInstance;
};

export { amplitudeInstance };
