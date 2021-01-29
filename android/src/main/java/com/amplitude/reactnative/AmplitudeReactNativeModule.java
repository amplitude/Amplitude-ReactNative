package com.amplitude.reactnative;

import androidx.annotation.NonNull;

import com.amplitude.api.Amplitude;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

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
    public void fakeLogEvent(String instanceName, String eventType, Promise promise) {
        promise.resolve("instanceName: " + instanceName + " eventType: " + eventType);
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
}
