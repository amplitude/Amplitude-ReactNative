import Foundation
import Amplitude

@objc(AmplitudeReactNative)
class ReactNative: NSObject {
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }

    @objc
    func initialize(_ instanceName: String,
                    apiKey: String,
                    resolver resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).initializeApiKey(apiKey)
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
    
    @objc
    func setOptOut(instanceName: String,
                   optOut: Bool,
                   resolver resolve: RCTPromiseResolveBlock,
                   rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).optOut = optOut
        resolve(true)
    }
    
    @objc
    func setLibraryName(instanceName: String,
                        libraryName: String,
                        resolver resolve: RCTPromiseResolveBlock,
                        rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).libraryName = libraryName
        resolve(true)
    }
    
    @objc
    func setLibraryVersion(instanceName: String,
                           libraryVersion: String,
                           resolver resolve: RCTPromiseResolveBlock,
                           rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).libraryVersion = libraryVersion
        resolve(true)
    }
    
    @objc
    func trackingSessionEvents(instanceName: String,
                               trackingSessionEvents: Bool,
                               resolver resolve: RCTPromiseResolveBlock,
                               rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).trackingSessionEvents = trackingSessionEvents
        resolve(true)
    }
    
    @objc
    func setUseDynamicConfig(instanceName: String,
                             useDynamicConfig: Bool,
                             resolver resolve: RCTPromiseResolveBlock,
                             rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).useDynamicConfig = useDynamicConfig
        resolve(true)
    }
    
    @objc
    func setUserId(instanceName: String,
                   userId: String,
                   resolver resolve: RCTPromiseResolveBlock,
                   rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).setUserId(userId)
        resolve(true)
    }
    
    @objc
    func setServerUrl(instanceName: String,
                      serverUrl: String,
                      resolver resolve: RCTPromiseResolveBlock,
                      rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).setServerUrl(serverUrl)
        resolve(true)
    }
    
    @objc
    func logEvent(_ instanceName: String,
                  eventType: String,
                  resolver resolve: RCTPromiseResolveBlock,
                  rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).logEvent(eventType)
        resolve(true)
    }
    
    @objc
    func logEventWithProperties(instanceName: String,
                                eventType: String,
                                eventProperties: [String: Any],
                                resolver resolve: RCTPromiseResolveBlock,
                                rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).logEvent(eventType, withEventProperties: eventProperties)
        resolve(true)
    }
    
    @objc
    func logRevenue(instanceName: String,
                    productIdentifier: String,
                    quantity: Int,
                    price: NSNumber,
                    receipt: String? = nil,
                    receiptType: String? = nil,
                    resolver resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock) -> Void {
        let revenue = AMPRevenue()
        revenue.setProductIdentifier(productIdentifier)
        revenue.setQuantity(quantity)
        revenue.setPrice(price)
        revenue.setReceipt(receipt?.data(using: .utf8))
        revenue.setRevenueType(receiptType)
        Amplitude.instance(withName: instanceName).logRevenueV2(revenue)
        resolve(true)
    }
    
    // TODO: IMPLEMENT
    @objc
    func identify(instanceName: String,
                  resolver resolve: RCTPromiseResolveBlock,
                  rejecter reject: RCTPromiseRejectBlock) -> Void {
        let identify = AMPIdentify()
        Amplitude.instance(withName: instanceName).identify(identify)
        resolve(true)
    }
    
    // TODO: IMPLEMENT
    @objc
    func groupIdentify(instanceName: String,
                       groupType: String,
                       groupName: NSObject,
                       resolver resolve: RCTPromiseResolveBlock,
                       rejecter reject: RCTPromiseRejectBlock) -> Void {
        let identify = AMPIdentify()
        Amplitude.instance(withName: instanceName).groupIdentify(withGroupType: groupType, groupName: groupName, groupIdentify: identify)
        resolve(true)
    }
    
    @objc
    func setGroup(instanceName: String,
                  groupType: String,
                  groupName: NSObject,
                  resolver resolve: RCTPromiseResolveBlock,
                  rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).setGroup(groupType, groupName: groupName)
        resolve(true)
    }
    
    @objc
    func setUserProperties(instanceName: String,
                           userProperties: [String: Any],
                           resolver resolve: RCTPromiseResolveBlock,
                           rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).setUserProperties(userProperties)
        resolve(true)
    }
    
    @objc
    func clearUserProperties(instanceName: String,
                             resolver resolve: RCTPromiseResolveBlock,
                             rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).clearUserProperties()
        resolve(true)
    }
    
    @objc
    func uploadEvents(instanceName: String,
                      resolver resolve: RCTPromiseResolveBlock,
                      rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).uploadEvents()
        resolve(true)
    }
}
