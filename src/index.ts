import { NativeModules } from 'react-native';

import { Constants } from './constants';
import { Identify } from './identify';
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

  init(apiKey: string): Promise<void | boolean> {
    return AmplitudeReactNative.initialize(this.instanceName, apiKey);
  }

  logEvent(
    eventType: string,
    // eventProperties?: Record<string, unknown>,
  ): Promise<void | boolean> {
    // const properties = this._baseProperties();
    // properties.eventType = eventType;
    // if (eventProperties) {
    //   properties.eventProperties = eventProperties;
    // }
    return AmplitudeReactNative.logEvent(this.instanceName, eventType);
  }

  enableCoppaControl(): Promise<void | boolean> {
    return AmplitudeReactNative.enableCoppaControl(this.instanceName);
  }

  disableCoppaControl(): Promise<void | boolean> {
    return AmplitudeReactNative.disableCoppaControl(this.instanceName);
  }

  regenerateDeviceId(): Promise<boolean> {
    return AmplitudeReactNative.regenerateDeviceId(this.instanceName);
  }

  setOptOut(optOut: boolean): Promise<void> {
    return AmplitudeReactNative.setOptOut(this.instanceName, optOut);
  }

  trackingSessionEvents(trackSessionEvents: boolean): Promise<void> {
    return AmplitudeReactNative.trackingSessionEvents(
      this.instanceName,
      trackSessionEvents,
    );
  }

  setUserId(userId: string): Promise<void> {
    return AmplitudeReactNative.setUserId(this.instanceName, userId);
  }

  setServerUrl(serverUrl: string): Promise<void> {
    return AmplitudeReactNative.setServerUrl(this.instanceName, serverUrl);
  }

  setUseDynamicConfig(useDynamicConfig: boolean): Promise<void> {
    const properties = this._baseProperties();
    properties.useDynamicConfig = useDynamicConfig;
    // make native call to setUseDynamicConfig via RN Bridge
    return Promise.resolve();
  }

  logRevenue(
    productIdentifier: string,
    quantity: number,
    price: number,
  ): Promise<void> {
    const properties = this._baseProperties();
    properties.productIdentifier = productIdentifier;
    properties.quantity = quantity;
    properties.price = price;
    // make native call to logRevenue via RN Bridge
    return Promise.resolve();
  }

  logRevenueAmount(amount: number): Promise<void> {
    const properties = this._baseProperties();
    properties.amount = amount;
    // make native call to logRevenueAmount via RN Bridge
    return Promise.resolve();
  }

  identify(identifyInstance: Identify): Promise<void> {
    const properties = this._baseProperties();
    properties.userProperties = identifyInstance.payload;
    // make native call to identify via RN Bridge
    return Promise.resolve();
  }

  setGroup(groupType: string, groupName: string | string[]): Promise<void> {
    const properties = this._baseProperties();
    properties.groupType = groupType;
    properties.groupName = groupName;
    // make native call to setGroup via RN Bridge
    return Promise.resolve();
  }

  groupIdentify(
    groupType: string,
    groupName: string | string[],
    groupIdentify: Identify,
  ): Promise<void> {
    const properties = this._baseProperties();
    properties.groupType = groupType;
    properties.groupName = groupName;
    properties.userProperties = groupIdentify.payload;
    // TODO(kelson): update this to use proper param:
    properties.outOfSession = false;
    // make native call to groupIdentify via RN Bridge
    return Promise.resolve();
  }

  setUserProperties(userProperties: Record<string, unknown>): Promise<void> {
    const properties = this._baseProperties();
    properties.userProperties = userProperties;
    // make native call to setUserProperties via RN Bridge
    return Promise.resolve();
  }

  clearUserProperties(): Promise<void> {
    // make native call to clearUserProperties via RN Bridge, passing baseProperties
    return Promise.resolve();
  }

  uploadEvents(): Promise<void> {
    // make native call to uploadEvents via RN Bridge, passing baseProperties
    return Promise.resolve();
  }

  // Private bridging calls
  protected _setLibraryName(libraryName: string): Promise<void> {
    const properties = this._baseProperties();
    properties.libraryName = libraryName;
    // make native call to setLibraryName via RN Bridge
    return Promise.resolve();
  }

  protected _setLibraryVersion(libraryVersion: string): Promise<void> {
    const properties = this._baseProperties();
    properties.libraryVersion = libraryVersion;
    // make native call to setLibraryVersion via RN Bridge
    return Promise.resolve();
  }

  _baseProperties(): Record<string, unknown> {
    return {
      instanceName: this.instanceName,
    };
  }
}
