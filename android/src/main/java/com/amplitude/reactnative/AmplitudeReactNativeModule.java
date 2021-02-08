package com.amplitude.reactnative;

import androidx.annotation.NonNull;

import com.amplitude.api.Amplitude;
import com.amplitude.api.Identify;
import com.amplitude.api.Revenue;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import org.json.JSONObject;

@ReactModule(name = AmplitudeReactNativeModule.NAME)
public class AmplitudeReactNativeModule extends ReactContextBaseJavaModule {
    public static final String NAME = "AmplitudeReactNative";
    private final ReactApplicationContext reactContext;

    public AmplitudeReactNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void initialize(String instanceName, String apiKey) {
        Amplitude.getInstance(instanceName).initialize(this.reactContext, apiKey);
    }

    @ReactMethod
    public void logEvent(String instanceName, String eventType) {
        Amplitude.getInstance(instanceName).logEvent(eventType);
    }

    @ReactMethod
    public void enableCoppaControl(String instanceName) {
        Amplitude.getInstance(instanceName).enableCoppaControl();
    }

    @ReactMethod
    public void disableCoppaControl(String instanceName) {
        Amplitude.getInstance(instanceName).disableCoppaControl();
    }

    @ReactMethod
    public void regenerateDeviceId(String instanceName) {
        Amplitude.getInstance(instanceName).regenerateDeviceId();
    }

    @ReactMethod
    public void setOptOut(String instanceName, boolean optOut) {
        Amplitude.getInstance(instanceName).setOptOut(optOut);
    }

    @ReactMethod
    public void setLibraryName(String instanceName, String libraryName) {
        Amplitude.getInstance(instanceName).setLibraryName(libraryName);
    }

    @ReactMethod
    public void setLibraryVersion(String instanceName, String libraryVersion) {
        Amplitude.getInstance(instanceName).setLibraryVersion(libraryVersion);
    }

    @ReactMethod
    public void trackingSessionEvents(String instanceName, boolean trackingSessionEvents) {
        Amplitude.getInstance(instanceName).trackSessionEvents(trackingSessionEvents);
    }

    @ReactMethod
    public void setUseDynamicConfig(String instanceName, boolean useDynamicConfig) {
        Amplitude.getInstance(instanceName).setUseDynamicConfig(useDynamicConfig);
    }

    @ReactMethod
    public void setUserId(String instanceName, String userId) {
        Amplitude.getInstance(instanceName).setUserId(userId);
    }

    @ReactMethod
    public void setServerUrl(String instanceName, String serverUrl) {
        Amplitude.getInstance(instanceName).setServerUrl(serverUrl);
    }

    @ReactMethod
    public void logRevenueV2(String instanceName, String productId, double price, int quantity, String revenueType, JSONObject eventProperties) {
        Revenue revenue = new Revenue();
        revenue.setProductId(productId);
        revenue.setPrice(price);
        revenue.setQuantity(quantity);
        revenue.setRevenueType(revenueType);
        revenue.setEventProperties(eventProperties);
        Amplitude.getInstance(instanceName).logRevenueV2(revenue);
    }

    // TODO: Correct the signature and finish the impl
    @ReactMethod
    public void identify(String instanceName) {
        Identify identify = new Identify();
        identify = createIdentify();
        Amplitude.getInstance(instanceName).identify(identify);
    }

    // TODO: Correct the signature and finish the impl
    @ReactMethod
    public void groupIdentify(String instanceName, String groupType, String groupName) {
        Identify identify = new Identify();
        identify = createIdentify();
        Amplitude.getInstance(instanceName).groupIdentify(groupType, groupName, identify);
    }

    @ReactMethod
    public void setUserProperties(String instanceName, JSONObject userProperties) {
        Amplitude.getInstance(instanceName).setUserProperties(userProperties);
    }

    @ReactMethod
    public void clearUserProperties(String instanceName) {
        Amplitude.getInstance(instanceName).clearUserProperties();
    }

    @ReactMethod
    public void setGroup(String instanceName, String groupType, String groupName) {
        Amplitude.getInstance(instanceName).setGroup(groupType, groupName);
    }

    @ReactMethod
    public void uploadEvents(String instanceName) {
        Amplitude.getInstance(instanceName).uploadEvents();
    }

    // TODO: Implement this
    private Identify createIdentify() {
        Identify identify = new Identify();
        return identify;
    }
}
