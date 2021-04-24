import { Amplitude } from '@amplitude/react-native';
import React from 'react';

const initAmplitude = (): Amplitude => {
  const amplitudeInstance = Amplitude.getInstance();
  amplitudeInstance.init('82b148f7211db7f9ccaff8048d0f7192');

  return amplitudeInstance;
};

const ampInstance = initAmplitude();

const AmplitudeInstanceContext = React.createContext<Amplitude>(ampInstance);

export const useAmplitude = (): Amplitude => {
  const amplitude = React.useContext(AmplitudeInstanceContext);

  if (!amplitude) {
    throw new Error(
      'The component must be wrapped in AmplitudeProvider to use useAmplitude',
    );
  }

  return amplitude;
};

export const AmplitudeProvider = ({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement => (
  <AmplitudeInstanceContext.Provider value={ampInstance}>
    {children}
  </AmplitudeInstanceContext.Provider>
);
