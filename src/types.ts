type PropertiesObject = { [key: string]: any };

type RevenueProperties = {
  price: number;
  productId?: string;
  quantity?: number;
  revenueType?: string;
  receipt?: string;
  receiptSignature?: string;
  eventProperties?: { [key: string]: any };
};

export interface AmplitudeReactNativeModule {
  initialize(instanceName: string, apiKey: string): Promise<boolean>;
  logEvent(instanceName: string, eventType: string): Promise<boolean>;
  enableCoppaControl(instanceName: string): Promise<boolean>;
  disableCoppaControl(instanceName: string): Promise<boolean>;
  regenerateDeviceId(instanceName: string): Promise<boolean>;
  setOptOut(instanceName: string, optOut: boolean): Promise<boolean>;
  setLibraryName(instanceName: string, libraryName: string): Promise<boolean>;
  setLibraryVersion(
    instanceName: string,
    libraryVersion: string,
  ): Promise<boolean>;
  trackingSessionEvents(
    instanceName: string,
    trackingSessionEvents: boolean,
  ): Promise<boolean>;
  setUseDynamicConfig(
    instanceName: string,
    useDynamicConfig: boolean,
  ): Promise<boolean>;
  setUserId(instanceName: string, userId: string): Promise<boolean>;
  setServerUrl(instanceName: string, serverUrl: string): Promise<boolean>;
  logRevenueV2(
    instanceName: string,
    userProperties: RevenueProperties,
  ): Promise<boolean>;
  // TODO: Correct the type once implemented:
  identify(instanceName: string): Promise<boolean>;
  // TODO: Correct the type once implemented:
  groupIdentify(
    instanceName: string,
    groupType: string,
    groupName: string | string[],
  ): Promise<boolean>;
  setUserProperties(
    instanceName: string,
    userProperties: PropertiesObject,
  ): Promise<boolean>;
  clearUserProperties(instanceName: string): Promise<boolean>;
  setGroup(
    instanceName: string,
    groupType: string,
    groupName: string | string[],
  ): Promise<boolean>;
  uploadEvents(instanceName: string): Promise<boolean>;
  // TODO: Correct the type once implemented:
  createIdentify(): Promise<void>;
}
