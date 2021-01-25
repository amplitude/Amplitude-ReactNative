
package com.amplitude.reactnative;

import com.amplitude.api.Amplitude;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AmplitudeReactNativeModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public AmplitudeReactNativeModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "AmplitudeReactNative";
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