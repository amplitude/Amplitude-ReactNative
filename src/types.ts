type PropertiesObject = Record<string, any>;

type RevenueProperties = {
  price: number;
  productId?: string;
  quantity?: number;
  revenueType?: string;
  receipt?: string;
  receiptSignature?: string;
  eventProperties?: PropertiesObject;
};

export interface AmplitudeReactNativeModule {
  initialize(instanceName: string, apiKey: string): Promise<boolean>;
  logEvent(instanceName: string, eventType: string): Promise<boolean>;
  logEventWithProperties(
    instanceName: string,
    eventType: string,
    eventProperties: PropertiesObject,
  ): Promise<boolean>;
  enableCoppaControl(instanceName: string): Promise<boolean>;
  disableCoppaControl(instanceName: string): Promise<boolean>;
  regenerateDeviceId(instanceName: string): Promise<boolean>;
  setDeviceId(instanceName: string, deviceId: string): Promise<boolean>;
  getDeviceId(instanceName: string): Promise<string>;
  setAdvertisingIdForDeviceId(instanceName: string): Promise<boolean>;
  setAppSetIdForDeviceId(instanceName: string): Promise<boolean>;
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
  setUserId(instanceName: string, userId: string | null): Promise<boolean>;
  setServerUrl(instanceName: string, serverUrl: string): Promise<boolean>;
  logRevenueV2(
    instanceName: string,
    userProperties: RevenueProperties,
  ): Promise<boolean>;
  identify(
    instanceName: string,
    identifyPayload: PropertiesObject,
  ): Promise<boolean>;
  setGroup(
    instanceName: string,
    groupType: string,
    groupName: string | string[],
  ): Promise<boolean>;
  groupIdentify(
    instanceName: string,
    groupType: string,
    groupName: string | string[],
    identifyPayload: Record<string, any>,
  ): Promise<boolean>;
  setUserProperties(
    instanceName: string,
    userProperties: PropertiesObject,
  ): Promise<boolean>;
  clearUserProperties(instanceName: string): Promise<boolean>;
  uploadEvents(instanceName: string): Promise<boolean>;
  getSessionId(instanceName: string): Promise<number>;
  setMinTimeBetweenSessionsMillis(
    instanceName: string,
    minTimeBetweenSessionsMillis: number,
  ): Promise<boolean>;
  setServerZone(
    instanceName: string,
    serverZone: string,
    updateServerUrl: boolean,
  ): Promise<boolean>;
  setEventUploadMaxBatchSize(
    instanceName: string,
    eventUploadMaxBatchSize: number,
  ): Promise<boolean>;
  setEventUploadPeriodMillis(
    instanceName: string,
    eventUploadPeriodMillis: number,
  ): Promise<boolean>;
  setEventUploadThreshold(
    instanceName: string,
    eventUploadThreshold: number,
  ): Promise<boolean>;
}
