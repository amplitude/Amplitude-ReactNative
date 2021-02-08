#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AmplitudeReactNative, NSObject)

// TODO: REMOVE THIS
RCT_EXTERN_METHOD(fakeLogEvent:(NSString *)instanceName eventType:(NSString *)eventType resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(initialize:(NSString *)instanceName apiKey:(NSString *)apiKey resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(enableCoppaControl:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(disableCoppaControl:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

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

RCT_EXTERN_METHOD(logRevenue:(NSString *)instanceName (NSString *)productIdentifier quantity:(NSInteger)quantity price:(NSNumber)price receipt:(NSString*)receipt resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

// TODO: TO IMPLEMENT
RCT_EXTERN_METHOD(identify:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

// TODO: TO IMPLEMENT
RCT_EXTERN_METHOD(groupIdentify:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

// TODO: TO IMPLEMENT
RCT_EXTERN_METHOD(setGroup:(NSString *)instanceName groupType:(NSString *)groupType groupName:(NSObject *)groupName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(clearUserProperties:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(uploadEvents:(NSString *)instanceName resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end