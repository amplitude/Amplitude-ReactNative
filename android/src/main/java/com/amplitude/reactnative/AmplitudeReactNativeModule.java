
package com.amplitude.reactnative;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class AmplitudeReactNativeModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public AmplitudeReactNativeModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNAmplitudeReactNative";
  }
}