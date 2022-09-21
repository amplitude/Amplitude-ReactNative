import { NativeModules, NativeEventEmitter, EmitterSubscription } from 'react-native';

import { Constants } from './constants';
import { Identify, IdentifyPayload, IdentifyOperation } from './identify';
import {
  AmplitudeReactNativeModule,
  Event,
  BaseEvent,
  IdentifyEvent,
  GroupIdentifyEvent,
  Middleware,
  MiddlewareExtra,
  SpecialEventType,
  Plan,
  IngestionMetadata,
  AmplitudeLogError
} from './types';
import { MiddlewareRunner } from './middlewareRunner';

const AmplitudeReactNative: AmplitudeReactNativeModule =
  NativeModules.AmplitudeReactNative;

export {
  Identify,
  Event,
  BaseEvent,
  IdentifyEvent,
  GroupIdentifyEvent,
  Middleware,
  MiddlewareExtra,
  SpecialEventType,
  IdentifyPayload,
  IdentifyOperation,
  Plan,
  IngestionMetadata,
};

export class Amplitude {
  private static _instances: Record<string, Amplitude>;
  private static _defaultInstanceName = '$default_instance';
  instanceName: string;
  private readonly _middlewareRunner: MiddlewareRunner;
  private readonly _nativeEventEmitter: NativeEventEmitter;

  private constructor(instanceName: string) {
    this.instanceName = instanceName;
    this._middlewareRunner = new MiddlewareRunner();
    this._setLibraryName(Constants.packageSourceName);
    this._setLibraryVersion(Constants.packageVersion);

    this._nativeEventEmitter = new NativeEventEmitter(NativeModules.AmplitudeReactNative);
  }

  static getInstance(
    instanceName: string = this._defaultInstanceName,
  ): Amplitude {
    if (!this._instances) {
      this._instances = {};
    }
    if (!Object.prototype.hasOwnProperty.call(this._instances, instanceName)) {
      this._instances[instanceName] = new Amplitude(instanceName);
    }

    return this._instances[instanceName];
  }

  init(apiKey: string): Promise<boolean> {
    return AmplitudeReactNative.initialize(this.instanceName, apiKey);
  }

  /**
   * Tracks an event. Events are saved locally.
   * Uploads are batched to occur every 30 events or every 30 seconds
   * (whichever comes first), as well as on app close.
   *
   * @param eventType The name of the event you wish to track.
   * @param eventProperties The event's properties.
   * @param extra Extra untyped parameters for use in middleware.
   */
  async logEvent(
    eventType: string,
    eventProperties?: Record<string, unknown>,
    extra?: MiddlewareExtra,
  ): Promise<boolean> {
    const event: BaseEvent = {
      eventType,
      eventProperties,
    };
    if (!this._runMiddlewares(event, extra)) {
      return Promise.resolve(false);
    }

    if (event.userId) {
      await AmplitudeReactNative.setUserId(this.instanceName, event.userId);
    }

    if (event.deviceId) {
      await AmplitudeReactNative.setDeviceId(this.instanceName, event.deviceId);
    }

    if (
      event.eventProperties &&
      Object.keys(event.eventProperties).length > 0
    ) {
      return AmplitudeReactNative.logEventWithProperties(
        this.instanceName,
        event.eventType,
        event.eventProperties,
      );
    }
    return AmplitudeReactNative.logEvent(this.instanceName, event.eventType);
  }

  /**
   * Enable COPPA (Children's Online Privacy Protection Act) restrictions on
   * IDFA, IDFV, city, IP address and location tracking.
   *
   * This can be used by any customer that does not want to collect IDFA, IDFV,
   * city, IP address and location tracking.
   */
  enableCoppaControl(): Promise<boolean> {
    return AmplitudeReactNative.enableCoppaControl(this.instanceName);
  }

  /**
   * Disable COPPA (Children's Online Privacy Protection Act) restrictions on
   * IDFA, IDFV, city, IP address and location tracking.
   */
  disableCoppaControl(): Promise<boolean> {
    return AmplitudeReactNative.disableCoppaControl(this.instanceName);
  }

  /**
   * Regenerate the DeviceId
   */
  regenerateDeviceId(): Promise<boolean> {
    return AmplitudeReactNative.regenerateDeviceId(this.instanceName);
  }

  /**
   * Sets a custom device id. <b>Note: only do this if you know what you are doing!</b>
   *
   * @param deviceId The device id.
   */
  setDeviceId(deviceId: string): Promise<boolean> {
    return AmplitudeReactNative.setDeviceId(this.instanceName, deviceId);
  }

  /**
   * Fetches the deviceId, a unique identifier shared between multiple users using the same app on the same device.
   * @returns the deviceId.
   */
  getDeviceId(): Promise<string | null> {
    return AmplitudeReactNative.getDeviceId(this.instanceName);
  }

  /**
   * Use the Advertising ID on Android if available from Google Play Services.
   * Must be called before init.
   */
  setAdvertisingIdForDeviceId(): Promise<boolean> {
    return AmplitudeReactNative.setAdvertisingIdForDeviceId(this.instanceName);
  }

  /**
   * Use the App Set ID (fall back to this if `useAdvertisingIdForDeviceId` is used) for device ID.
   * Must be called before init.
   */
  setAppSetIdForDeviceId(): Promise<boolean> {
    return AmplitudeReactNative.setAppSetIdForDeviceId(this.instanceName);
  }

  /**
   * Enables tracking opt out.
   *
   * If the user wants to opt out of all tracking, use this method to enable
   * opt out for them. Once opt out is enabled, no events will be saved locally
   * or sent to the server.
   *
   * Calling this method again with enabled set to false will turn tracking back on for the user.
   *
   * @param optOut
   */
  setOptOut(optOut: boolean): Promise<boolean> {
    return AmplitudeReactNative.setOptOut(this.instanceName, optOut);
  }

  /**
   * Whether to automatically log start and end session events corresponding to
   * the start and end of a user's session.
   *
   * @param trackSessionEvents
   */
  trackingSessionEvents(trackSessionEvents: boolean): Promise<boolean> {
    return AmplitudeReactNative.trackingSessionEvents(
      this.instanceName,
      trackSessionEvents,
    );
  }

  /**
   * If your app has its own login system that you want to track users with,
   * you can set the userId.
   *
   * @param userId
   */
  setUserId(userId: string | null): Promise<boolean> {
    return AmplitudeReactNative.setUserId(this.instanceName, userId);
  }

  /**
   * Customize the destination for server url.
   *
   * @param serverUrl
   */
  setServerUrl(serverUrl: string): Promise<boolean> {
    return AmplitudeReactNative.setServerUrl(this.instanceName, serverUrl);
  }

  /**
   * Dynamically adjust server URL
   *
   * @param useDynamicConfig
   */
  setUseDynamicConfig(useDynamicConfig: boolean): Promise<boolean> {
    return AmplitudeReactNative.setUseDynamicConfig(
      this.instanceName,
      useDynamicConfig,
    );
  }

  /**
   * Log revenue data.
   *
   * Note: price is a required field to log revenue events.
   * If quantity is not specified then defaults to 1.
   *
   * @param userProperties
   */
  logRevenue(userProperties: {
    price: number;
    productId?: string;
    quantity?: number;
    revenueType?: string;
    receipt?: string;
    receiptSignature?: string;
    eventProperties?: { [key: string]: any };
  }): Promise<boolean> {
    return AmplitudeReactNative.logRevenueV2(this.instanceName, userProperties);
  }

  /**
   * Send an identify call containing user property operations to Amplitude servers.
   *
   * @param identifyInstance
   * @param extra
   */
  async identify(
    identifyInstance: Identify,
    extra?: MiddlewareExtra,
  ): Promise<boolean> {
    const event: IdentifyEvent = {
      eventType: SpecialEventType.IDENTIFY,
      userProperties: { ...identifyInstance.payload },
    };
    if (!this._runMiddlewares(event, extra)) {
      return Promise.resolve(false);
    }

    if (event.userId) {
      await AmplitudeReactNative.setUserId(this.instanceName, event.userId);
    }

    if (event.deviceId) {
      await AmplitudeReactNative.setDeviceId(this.instanceName, event.deviceId);
    }

    return AmplitudeReactNative.identify(
      this.instanceName,
      event.userProperties,
    );
  }

  /**
   * Adds a user to a group or groups. You need to specify a groupType and groupName(s).
   * @param groupType
   * @param groupName
   */
  setGroup(groupType: string, groupName: string | string[]): Promise<boolean> {
    return AmplitudeReactNative.setGroup(
      this.instanceName,
      groupType,
      groupName,
    );
  }

  /**
   * Set or update properties of particular groups
   *
   * @param groupType
   * @param groupName
   * @param identifyInstance
   * @param extra
   */
  async groupIdentify(
    groupType: string,
    groupName: string | string[],
    identifyInstance: Identify,
    extra?: MiddlewareExtra,
  ): Promise<boolean> {
    const event: GroupIdentifyEvent = {
      eventType: SpecialEventType.GROUP_IDENTIFY,
      groupType,
      groupName,
      groupProperties: { ...identifyInstance.payload },
    };
    if (!this._runMiddlewares(event, extra)) {
      return Promise.resolve(false);
    }

    if (event.userId) {
      await AmplitudeReactNative.setUserId(this.instanceName, event.userId);
    }

    if (event.deviceId) {
      await AmplitudeReactNative.setDeviceId(this.instanceName, event.deviceId);
    }

    return AmplitudeReactNative.groupIdentify(
      this.instanceName,
      event.groupType,
      event.groupName,
      event.groupProperties,
    );
  }

  /**
   * Adds properties that are tracked on the user level.
   * Note: Property keys must be [String] objects and values must be serializable.
   *
   * @param userProperties
   */
  setUserProperties(userProperties: Record<string, unknown>): Promise<boolean> {
    return AmplitudeReactNative.setUserProperties(
      this.instanceName,
      userProperties,
    );
  }

  /**
   * Clears all properties that are tracked on the user level.
   *
   * Note: This operation is irreversible!!
   */
  clearUserProperties(): Promise<boolean> {
    return AmplitudeReactNative.clearUserProperties(this.instanceName);
  }

  /**
   * Upload all unsent events.
   */
  uploadEvents(): Promise<boolean> {
    return AmplitudeReactNative.uploadEvents(this.instanceName);
  }

  /**
   * Fetches the sessionId, a timestamp used for log session event.
   * @returns the sessionId.
   */
  getSessionId(): Promise<number> {
    return AmplitudeReactNative.getSessionId(this.instanceName);
  }

  /**
   * Sets the minimum cutoff time in millisseconds for sessions to be considered distinct.
   * The default time is 5 minutes.
   *
   * @param minTimeBetweenSessionsMillis
   */
  setMinTimeBetweenSessionsMillis(
    minTimeBetweenSessionsMillis: number,
  ): Promise<boolean> {
    return AmplitudeReactNative.setMinTimeBetweenSessionsMillis(
      this.instanceName,
      minTimeBetweenSessionsMillis,
    );
  }

  /**
   * Set Amplitude Server Zone, switch to zone related configuration,
   * including dynamic configuration. If updateServerUrl is true, including server url as well.
   * Recommend to keep updateServerUrl to be true for alignment.
   *
   * @param serverZone amplitude serverZone, US or EU, default is US
   * @param updateServerUrl if update server url when update server zone, recommend setting true
   */
  setServerZone(
    serverZone: string,
    updateServerUrl: boolean = true,
  ): Promise<boolean> {
    return AmplitudeReactNative.setServerZone(
      this.instanceName,
      serverZone,
      updateServerUrl,
    );
  }

  /**
   * Sets event upload max batch size. This controls the maximum number of events sent with
   * each upload request.
   *
   * @param eventUploadMaxBatchSize the event upload max batch size
   */
  setEventUploadMaxBatchSize(
    eventUploadMaxBatchSize: number,
  ): Promise<boolean> {
    return AmplitudeReactNative.setEventUploadMaxBatchSize(
      this.instanceName,
      eventUploadMaxBatchSize,
    );
  }

  /**
   * Sets event upload period millis. The SDK will attempt to batch upload unsent events
   * every eventUploadPeriodMillis milliseconds, or if the unsent event count exceeds the
   * event upload threshold.
   *
   * @param eventUploadPeriodMillis the event upload period millis
   */
  setEventUploadPeriodMillis(
    eventUploadPeriodMillis: number,
  ): Promise<boolean> {
    return AmplitudeReactNative.setEventUploadPeriodMillis(
      this.instanceName,
      eventUploadPeriodMillis,
    );
  }

  /**
   * Sets event upload threshold. The SDK will attempt to batch upload unsent events
   * every eventUploadPeriodMillis milliseconds, or if the unsent event count exceeds the
   * event upload threshold.
   *
   * @param eventUploadThreshold the event upload threshold
   */
  setEventUploadThreshold(eventUploadThreshold: number): Promise<boolean> {
    return AmplitudeReactNative.setEventUploadThreshold(
      this.instanceName,
      eventUploadThreshold,
    );
  }

  /**
   * Sets tracking plan information.
   *
   * @param plan Plan object
   */
  setPlan(plan: Plan): Promise<boolean> {
    return AmplitudeReactNative.setPlan(this.instanceName, plan);
  }

  /**
   * Sets ingestion metadata information.
   *
   * @param ingestionMetadata IngestionMetadata object
   */
  setIngestionMetadata(ingestionMetadata: IngestionMetadata): Promise<boolean> {
    return AmplitudeReactNative.setIngestionMetadata(this.instanceName, ingestionMetadata);
  }

  addEventMiddleware(middleware: Middleware): Amplitude {
    this._middlewareRunner.add(middleware);
    return this;
  }

  /**
   * Enable/disable message logging by the SDK.
   *
   * @param enableLogging whether to enable message logging by the SDK.
   */
  enableLogging(enableLogging: boolean): Promise<boolean> {
    return AmplitudeReactNative.enableLogging(this.instanceName, enableLogging);
  }

  /**
   * Set log callback, it can help read and collect error message from sdk. The call back function like the following format
   * (tag: string, message: string) => {
   *  //implement your own logic
   * }
   *
   * @param callback
   */

  setLogCallback(callback: (error: AmplitudeLogError) => void): EmitterSubscription {
    return this._nativeEventEmitter.addListener("AmplitudeLogError", callback);
  }

  /**
   * Sets the logging level. Logging messages will only appear if they are the same severity
   * level or higher than the set log level.
   *
   * @param logLevel the log level
   */
  setLogLevel(logLevel: number): Promise<boolean> {
    return AmplitudeReactNative.setLogLevel(this.instanceName, logLevel);
  }

  // Private bridging calls
  private _setLibraryName(libraryName: string): Promise<boolean> {
    return AmplitudeReactNative.setLibraryName(this.instanceName, libraryName);
  }

  private _setLibraryVersion(libraryVersion: string): Promise<boolean> {
    return AmplitudeReactNative.setLibraryVersion(
      this.instanceName,
      libraryVersion,
    );
  }

  private _runMiddlewares(
    event: Event,
    extra: MiddlewareExtra | undefined,
  ): boolean {
    let middlewareCompleted = false;
    this._middlewareRunner.run({ event, extra }, () => {
      middlewareCompleted = true;
    });

    return middlewareCompleted;
  }
}
