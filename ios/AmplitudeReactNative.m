#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AmplitudeReactNative, NSObject)

RCT_EXTERN_METHOD(initialize:(NSString *)instanceName apiKey:(NSString *)apiKey resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(enableCoppaControl:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(disableCoppaControl:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(regenerateDeviceId:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setDeviceId:(NSString *)instanceName deviceId:(NSString *)deviceId resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(getDeviceId:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setOptOut:(NSString *)instanceName optOut:(BOOL)optOut resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setLibraryName:(NSString *)instanceName libraryName:(NSString *)libraryName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setLibraryVersion:(NSString *)instanceName libraryVersion:(NSString *)libraryVersion resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(trackingSessionEvents:(NSString *)instanceName trackingSessionEvents:(BOOL)trackingSessionEvents resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setUseDynamicConfig:(NSString *)instanceName useDynamicConfig:(BOOL)useDynamicConfig resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setUserId:(NSString *)instanceName userId:(NSString *)userId resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setServerUrl:(NSString *)instanceName serverUrl:(NSString *)serverUrl resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(logEvent:(NSString *)instanceName eventType:(NSString *)eventType resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(logEventWithProperties:(NSString *)instanceName eventType:(NSString *)eventType  eventProperties:(NSDictionary *)eventProperties resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setUserProperties:(NSString *)instanceName userProperties:(NSDictionary *)userProperties resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(logRevenueV2:(NSString *)instanceName userProperties:(NSDictionary *)userProperties resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(identify:(NSString *)instanceName userProperties:(NSDictionary *)userProperties resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(groupIdentify:(NSString *)instanceName groupType:(NSString *)groupType groupName:(id)groupName userProperties:(NSDictionary *)userProperties resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setGroup:(NSString *)instanceName groupType:(NSString *)groupType groupName:(id)groupName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(clearUserProperties:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(uploadEvents:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(getSessionId:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setAdvertisingIdForDeviceId:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setAppSetIdForDeviceId:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setMinTimeBetweenSessionsMillis:(NSString *)instanceName minTimeBetweenSessionsMillis:(double)minTimeBetweenSessionsMillis resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setServerZone:(NSString *)instanceName serverZone:(NSString *)serverZone updateServerUrl:(BOOL)updateServerUrl resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setEventUploadMaxBatchSize:(NSString *)instanceName eventUploadMaxBatchSize:(int)eventUploadMaxBatchSize resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setEventUploadPeriodMillis:(NSString *)instanceName eventUploadPeriodMillis:(int)eventUploadPeriodMillis resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(setEventUploadThreshold:(NSString *)instanceName eventUploadThreshold:(int)eventUploadThreshold resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
