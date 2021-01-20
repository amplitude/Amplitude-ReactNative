
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
  public void logEvent(String identifier) {
    Amplitude.getInstance().logEvent(identifier);
  }
}