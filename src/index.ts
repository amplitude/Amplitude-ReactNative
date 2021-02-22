import { NativeModules } from 'react-native';

import { Constants } from './constants';
//import { Identify } from './identify';
import { AmplitudeReactNativeModule } from './types';

const AmplitudeReactNative: AmplitudeReactNativeModule =
  NativeModules.AmplitudeReactNative;

export class Amplitude {
  protected static _instances: Record<string, Amplitude>;
  protected static _defaultInstanceName = '$default_instance';
  instanceName: string;

  constructor(instanceName: string) {
    this.instanceName = instanceName;
    this._setLibraryName(Constants.packageName);
    this._setLibraryVersion(Constants.packageVersion);
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
   */
  logEvent(
    eventType: string,
    // eventProperties?: Record<string, unknown>,
  ): Promise<boolean> {
    return AmplitudeReactNative.logEvent(this.instanceName, eventType);
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
  setUserId(userId: string): Promise<boolean> {
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

  // TODO(Alyssa): will implement in followup ticket
  logRevenue(
    productIdentifier: string,
    quantity: number,
    price: number,
    receipt: string,
    receiptType: string,
  ): Promise<boolean> {
    return AmplitudeReactNative.logRevenue(
      this.instanceName,
      productIdentifier,
      quantity,
      price,
      receipt,
      receiptType,
    );
  }

  // TODO(Alyssa): will implement in followup ticket
  identify(): Promise<boolean> {
    return AmplitudeReactNative.identify(this.instanceName);
  }

  setGroup(groupType: string, groupName: string | string[]): Promise<boolean> {
    return AmplitudeReactNative.setGroup(
      this.instanceName,
      groupType,
      groupName,
    );
  }

  // TODO(Alyssa): will implement in followup ticket
  groupIdentify(
    groupType: string,
    groupName: string | string[],
  ): Promise<boolean> {
    // TODO(kelson): update this to use proper param:
    return AmplitudeReactNative.groupIdentify(
      this.instanceName,
      groupType,
      groupName,
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

  // Private bridging calls
  protected _setLibraryName(libraryName: string): Promise<boolean> {
    return AmplitudeReactNative.setLibraryName(this.instanceName, libraryName);
  }

  protected _setLibraryVersion(libraryVersion: string): Promise<boolean> {
    return AmplitudeReactNative.setLibraryVersion(
      this.instanceName,
      libraryVersion,
    );
  }
}
