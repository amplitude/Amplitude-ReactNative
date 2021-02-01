import Foundation
import Amplitude

@objc(AmplitudeReactNative)
class ReactNative: NSObject {
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }

    @objc
    func fakeLogEvent(_ instanceName: String,
                      eventType: String,
                      resolver resolve: RCTPromiseResolveBlock,
                      rejecter reject: RCTPromiseRejectBlock) -> Void {
        resolve("instanceName: " + instanceName + " eventType: " + eventType)
    }
    
    @objc
    func initialize(instanceName: String,
                    apiKey: String,
                    resolver resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).initializeApiKey(apiKey)
        resolve(true)
    }

    @objc
    func logEvent(instanceName: String,
                  eventType: String,
                  resolver resolve: RCTPromiseResolveBlock,
                  rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).logEvent(eventType)
        resolve(true)
    }

    @objc
    func enableCoppaControl(instanceName: String,
                            resolver resolve: RCTPromiseResolveBlock,
                            rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).enableCoppaControl()
        resolve(true)
    }
    
    @objc
    func disableCoppaControl(instanceName: String,
                             resolver resolve: RCTPromiseResolveBlock,
                             rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).disableCoppaControl()
        resolve(true)
    }
}
