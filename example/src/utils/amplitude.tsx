import { Amplitude } from '@amplitude/react-native';
import React from 'react';

const initAmplitude = (): Amplitude => {
  const amplitudeInstance = Amplitude.getInstance();
  amplitudeInstance.init('9c9566b48da3f559498fd70b164303b8');

  return amplitudeInstance;
};

const AmplitudeInstanceContext = React.createContext<Amplitude | null>(null);

export const useAmplitudeInstance = () =>
  React.useContext(AmplitudeInstanceContext);

interface AmplitudeProviderProps {
  children: React.ReactNode;
}

export const AmplitudeProvider = ({
  children,
}: AmplitudeProviderProps): React.ReactElement => {
  const [ampInstance, setAmpInstance] = React.useState<Amplitude | null>(null);

  React.useEffect(() => {
    if (!ampInstance) {
      setAmpInstance(initAmplitude());
    }
  }, [ampInstance]);

  return (
    <AmplitudeInstanceContext.Provider value={ampInstance}>
      {children}
    </AmplitudeInstanceContext.Provider>
  );
};
