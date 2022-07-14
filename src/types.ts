import { IdentifyPayload } from './identify';

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
  getDeviceId(instanceName: string): Promise<string | null>;
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
  setPlan(instanceName: string, plan: Plan): Promise<boolean>;
  enableLogging(instanceName: string, enableLogging: boolean): Promise<boolean>;
  setLogCallback(instanceName: string, callback: Function): void;
  setLogLevel(instanceName: string, logLevel: number): Promise<boolean>;
}

/**
 * Strings that have special meaning when used as an event's type
 * and have different specifications.
 */
export enum SpecialEventType {
  IDENTIFY = '$identify',
  GROUP_IDENTIFY = '$groupidentify',
}

export interface BaseEvent {
  eventType: Exclude<string, SpecialEventType>;
  userId?: string;
  deviceId?: string;
  eventProperties?: PropertiesObject;
}

export interface IdentifyEvent extends BaseEvent {
  eventType: SpecialEventType.IDENTIFY;
  userProperties: IdentifyPayload;
}

export interface GroupIdentifyEvent extends BaseEvent {
  eventType: SpecialEventType.GROUP_IDENTIFY;
  groupType: string;
  groupName: string | string[];
  groupProperties: IdentifyPayload;
}

export type Event = BaseEvent | IdentifyEvent | GroupIdentifyEvent;

/**
 * Unstructured object to let users pass extra data to middleware
 */
export interface MiddlewareExtra {
  [name: string]: any;
}

/**
 * Data to be processed by middleware
 */
export interface MiddlewarePayload {
  event: Event;
  extra?: MiddlewareExtra;
}

/**
 * Function called at the end of each Middleware to run the next middleware in the chain
 */
export type MiddlewareNext = (payload: MiddlewarePayload) => void;

/**
 * A function to run on the Event stream (each logEvent call)
 *
 * @param payload The event and extra data being sent
 * @param next Function to run the next middleware in the chain, not calling next will end the middleware chain
 */
export type Middleware = (
  payload: MiddlewarePayload,
  next: MiddlewareNext,
) => void;

/**
 * Tracking plan
 */
export type Plan = {
  /** The tracking plan branch name e.g. "main" */
  branch?: string;
  /** The tracking plan source e.g. "web", "mobile" */
  source?: string;
  /** The tracking plan version e.g. "1", "15" */
  version?: string;
  /** The tracking plan version Id e.g. "9ec23ba0-275f-468f-80d1-66b88bff9529" */
  versionId?: string;
};
