type PropertiesObject = { [key: string]: any };

export interface AmplitudeReactNativeModule {
  initialize(instanceName: string, apiKey: string): Promise<boolean | void>;
  logEvent(instanceName: string, eventType: string): Promise<boolean | void>;
  enableCoppaControl(instanceName: string): Promise<boolean | void>;
  disableCoppaControl(instanceName: string): Promise<boolean | void>;
  regenerateDeviceId(instanceName: string): Promise<boolean>;
  setOptOut(instanceName: string, optOut: boolean): Promise<void>;
  setLibraryName(instanceName: string, libraryName: string): Promise<void>;
  setLibraryVersion(
    instanceName: string,
    libraryVersion: string,
  ): Promise<void>;
  trackingSessionEvents(
    instanceName: string,
    trackingSessionEvents: boolean,
  ): Promise<void>;
  setUseDynamicConfig(
    instanceName: string,
    useDynamicConfig: boolean,
  ): Promise<void>;
  setUserId(instanceName: string, userId: string): Promise<void>;
  setServerUrl(instanceName: string, serverUrl: string): Promise<void>;
  logRevenueV2(
    instanceName: string,
    logRevenueV2: string,
    price: number,
    quantity: number,
    revenueType: string,
    eventProperties: PropertiesObject,
  ): Promise<void>;
  // TODO: Correct the type once implemented:
  identify(instanceName: string): Promise<void>;
  // TODO: Correct the type once implemented:
  groupIdentify(instanceName: string, groupName: string): Promise<void>;
  setUserProperties(
    instanceName: string,
    userProperties: PropertiesObject,
  ): Promise<void>;
  clearUserProperties(instanceName: string): Promise<void>;
  setGroup(
    instanceName: string,
    groupType: string,
    groupName: string,
  ): Promise<void>;
  uploadEvents(instanceName: string): Promise<void>;
  // TODO: Correct the type once implemented:
  createIdentify(): Promise<void>;
}
