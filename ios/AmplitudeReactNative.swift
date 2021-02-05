import Amplitude
import Foundation

@objc(AmplitudeReactNative)
class ReactNative: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
    return false
  }

  @objc
  func initialize(
    instanceName: String,
    apiKey: String,
    resolver resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) {
    Amplitude.instance(withName: instanceName).initializeApiKey(apiKey)
    resolve(true)
  }

  @objc
  func logEvent(
    instanceName: String,
    eventType: String,
    resolver resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) {
    Amplitude.instance(withName: instanceName).logEvent(eventType)
    resolve(void)
  }

  @objc
  func enableCoppaControl(
    instanceName: String,
    resolver resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) {
    Amplitude.instance(withName: instanceName).enableCoppaControl()
    resolve(true)
  }

  @objc
  func disableCoppaControl(
    instanceName: String,
    resolver resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) {
    Amplitude.instance(withName: instanceName).disableCoppaControl()
    resolve(true)
  }
}
