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
    func enableCoppaControl(_ instanceName: String,
                            resolver resolve: RCTPromiseResolveBlock,
                            rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).enableCoppaControl()
        resolve(true)
    }

    @objc
    func disableCoppaControl(_ instanceName: String,
                             resolver resolve: RCTPromiseResolveBlock,
                             rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).disableCoppaControl()
        resolve(true)
    }

    @objc
    func regenerateDeviceId(_ instanceName: String,
                            resolver resolve: RCTPromiseResolveBlock,
                            rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).regenerateDeviceId()
        resolve(true)
    }

    @objc
    func setDeviceId(_ instanceName: String,
                       deviceId: String,
                       resolver resolve: RCTPromiseResolveBlock,
                       rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).setDeviceId(deviceId)
        resolve(true)
    }

    @objc
    func getDeviceId(_ instanceName: String,
                            resolver resolve: RCTPromiseResolveBlock,
                            rejecter reject: RCTPromiseRejectBlock) -> Void {
        resolve(Amplitude.instance(withName: instanceName).getDeviceId())
    }

    @objc
    func setAdvertisingIdForDeviceId(_ instanceName: String,
                            resolver resolve: RCTPromiseResolveBlock,
                            rejecter reject: RCTPromiseRejectBlock) -> Void {
        resolve(false)
    }

    @objc
    func setAppSetIdForDeviceId(_ instanceName: String,
                            resolver resolve: RCTPromiseResolveBlock,
                            rejecter reject: RCTPromiseRejectBlock) -> Void {
        resolve(false)
    }

    @objc
    func setOptOut(_ instanceName: String,
                   optOut: Bool,
                   resolver resolve: RCTPromiseResolveBlock,
                   rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).optOut = optOut
        resolve(true)
    }
    
    @objc
    func setLibraryName(_ instanceName: String,
                        libraryName: String,
                        resolver resolve: RCTPromiseResolveBlock,
                        rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).libraryName = libraryName
        resolve(true)
    }
    
    @objc
    func setLibraryVersion(_ instanceName: String,
                           libraryVersion: String,
                           resolver resolve: RCTPromiseResolveBlock,
                           rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).libraryVersion = libraryVersion
        resolve(true)
    }
    
    @objc
    func trackingSessionEvents(_ instanceName: String,
                               trackingSessionEvents: Bool,
                               resolver resolve: RCTPromiseResolveBlock,
                               rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).trackingSessionEvents = trackingSessionEvents
        resolve(true)
    }
    
    @objc
    func setUseDynamicConfig(_ instanceName: String,
                             useDynamicConfig: Bool,
                             resolver resolve: RCTPromiseResolveBlock,
                             rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).useDynamicConfig = useDynamicConfig
        resolve(true)
    }
    
    @objc
    func setUserId(_ instanceName: String,
                   userId: String,
                   resolver resolve: RCTPromiseResolveBlock,
                   rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).setUserId(userId)
        resolve(true)
    }
    
    @objc
    func setServerUrl(_ instanceName: String,
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
    func logEventWithProperties(_ instanceName: String,
                                eventType: String,
                                eventProperties: [String: Any],
                                resolver resolve: RCTPromiseResolveBlock,
                                rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).logEvent(eventType, withEventProperties: eventProperties)
        resolve(true)
    }
    
    @objc
    func logRevenueV2(_ instanceName: String,
                      userProperties: [String: Any],
                      resolver resolve: RCTPromiseResolveBlock,
                      rejecter reject: RCTPromiseRejectBlock) -> Void {
        let revenue = createRevenue(userProperties);
        Amplitude.instance(withName: instanceName).logRevenueV2(revenue)
        resolve(true)
    }

    @objc
    func identify(_ instanceName: String,
                  userProperties: [String: [String : NSObject]],
                  resolver resolve: RCTPromiseResolveBlock,
                  rejecter reject: RCTPromiseRejectBlock) -> Void {
        let identify = createIdentify(userProperties)
        Amplitude.instance(withName: instanceName).identify(identify)
        resolve(true)
    }
    
    @objc
    func groupIdentify(_ instanceName: String,
                       groupType: String,
                       groupName: NSObject,
                       userProperties: [String: [String : NSObject]],
                       resolver resolve: RCTPromiseResolveBlock,
                       rejecter reject: RCTPromiseRejectBlock) -> Void {
        let identify = createIdentify(userProperties)
        Amplitude.instance(withName: instanceName).groupIdentify(withGroupType: groupType,
                                                                 groupName: groupName,
                                                                 groupIdentify: identify)
        resolve(true)
    }
    
    @objc
    func setGroup(_ instanceName: String,
                  groupType: String,
                  groupName: NSObject,
                  resolver resolve: RCTPromiseResolveBlock,
                  rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).setGroup(groupType, groupName: groupName)
        resolve(true)
    }
    
    @objc
    func setUserProperties(_ instanceName: String,
                           userProperties: [String: Any],
                           resolver resolve: RCTPromiseResolveBlock,
                           rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).setUserProperties(userProperties)
        resolve(true)
    }
    
    @objc
    func clearUserProperties(_ instanceName: String,
                             resolver resolve: RCTPromiseResolveBlock,
                             rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).clearUserProperties()
        resolve(true)
    }
    
    @objc
    func uploadEvents(_ instanceName: String,
                      resolver resolve: RCTPromiseResolveBlock,
                      rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).uploadEvents()
        resolve(true)
    }

    @objc
    func getSessionId(_ instanceName: String,
                            resolver resolve: RCTPromiseResolveBlock,
                            rejecter reject: RCTPromiseRejectBlock) -> Void {
        resolve(Amplitude.instance(withName: instanceName).getSessionId())
    }

    @objc
    func setMinTimeBetweenSessionsMillis(_ instanceName: String,
                   minTimeBetweenSessionsMillis: Int,
                   resolver resolve: RCTPromiseResolveBlock,
                   rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).minTimeBetweenSessionsMillis = minTimeBetweenSessionsMillis
        resolve(true)
    }

    @objc
    func setServerZone(_ instanceName: String,
                   serverZone: String,
                   updateServerUrl: Bool,
                   resolver resolve: RCTPromiseResolveBlock,
                   rejecter reject: RCTPromiseRejectBlock) -> Void {
        let ampServerZone = serverZone == "EU" ? AMPServerZone.EU : AMPServerZone.US
        Amplitude.instance(withName: instanceName).setServerZone(ampServerZone, updateServerUrl: updateServerUrl)
        resolve(true)
    }

    @objc
    func setEventUploadMaxBatchSize(_ instanceName: String,
                    eventUploadMaxBatchSize: Int32,
                    resolver resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).updateEventUploadMaxBatchSize(eventUploadMaxBatchSize);
        resolve(true)
    }

    @objc
    func setEventUploadPeriodMillis(_ instanceName: String,
                    eventUploadPeriodMillis: Int32,
                    resolver resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).eventUploadPeriodSeconds = eventUploadPeriodMillis / 1000;
        resolve(true)
    }

    @objc
    func setEventUploadThreshold(_ instanceName: String,
                    eventUploadThreshold: Int32,
                    resolver resolve: RCTPromiseResolveBlock,
                    rejecter reject: RCTPromiseRejectBlock) -> Void {
        Amplitude.instance(withName: instanceName).eventUploadThreshold = eventUploadThreshold;
        resolve(true)
    }

    private func createRevenue(_ userProperties: [String: Any]) -> AMPRevenue {
        let revenue = AMPRevenue()
        if userProperties["productId"] != nil {
            revenue.setProductIdentifier((userProperties["productId"] as! String))
        }
        if userProperties["price"] != nil {
            revenue.setPrice((userProperties["price"] as! NSNumber))
        }
        if userProperties["quantity"] != nil {
            revenue.setQuantity((userProperties["quantity"] as! Int))
        } else {
            revenue.setQuantity(1)
        }
        if userProperties["revenueType"] != nil {
            revenue.setRevenueType((userProperties["revenueType"] as! String))
        }
        if userProperties["receipt"] != nil {
            revenue.setReceipt((userProperties["receipt"] as! String).data(using: .utf8))
        }
        if userProperties["eventProperties"] != nil {
            revenue.setEventProperties((userProperties["eventProperties"] as! [String : Any]))
        }
        return revenue;
    }

    private func createIdentify(_ userProperties: [String: [String : NSObject]]) -> AMPIdentify {
        let identify = AMPIdentify()
        for (operation, properties) in userProperties {
            for (key, value) in properties {
                switch operation {
                case "$add":
                    identify.add(key, value: value)
                case "$append":
                    identify.append(key, value: value)
                case "$prepend":
                    identify.prepend(key, value: value)
                case "$set":
                    identify.set(key, value: value)
                case "$setOnce":
                    identify.setOnce(key, value: value)
                case "$unset":
                    identify.unset(key) // value is default to `-`
                default:
                    break
                }
            }
        }
        return identify
    }
}
