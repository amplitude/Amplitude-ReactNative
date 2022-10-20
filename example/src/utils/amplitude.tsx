import { Amplitude } from '@amplitude/react-native';
import React from 'react';

const initAmplitude = (): Amplitude => {
  const amplitudeInstance = Amplitude.getInstance();
  amplitudeInstance.init('9c9566b48da3f559498fd70b164303b8');
  amplitudeInstance.setServerZone('US');
  amplitudeInstance.setEventUploadMaxBatchSize(200);
  amplitudeInstance.setEventUploadThreshold(30);
  amplitudeInstance.setEventUploadPeriodMillis(20000);
  amplitudeInstance.setPlan({
    branch: 'example-branch',
    source: 'example-source',
    version: '1.2.3',
    versionId: 'example-version-id',
  });
  amplitudeInstance.enableLogging(true);
  amplitudeInstance.setLogLevel(2);
  amplitudeInstance.addEventMiddleware((payload, next) => {
    const { event, extra } = payload;
    console.log(
      `$event=${event.eventType} properties=${event.eventProperties} extra=${extra}`,
    );
    next(payload);
  });

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
