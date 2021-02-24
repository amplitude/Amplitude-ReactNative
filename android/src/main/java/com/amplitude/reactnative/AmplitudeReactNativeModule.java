package com.amplitude.reactnative;

import androidx.annotation.NonNull;

import com.amplitude.api.Amplitude;
import com.amplitude.api.AmplitudeClient;
import com.amplitude.api.Identify;
import com.amplitude.api.Revenue;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import org.json.JSONObject;
import org.json.JSONException;

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
    public void initialize(String instanceName, String apiKey, Promise promise) {
        Amplitude.getInstance(instanceName).initialize(this.reactContext, apiKey);
        promise.resolve(true);
    }

    @ReactMethod
    public void logEvent(String instanceName, String eventType, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.logEvent(eventType);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void enableCoppaControl(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.enableCoppaControl();
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void disableCoppaControl(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.disableCoppaControl();
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void regenerateDeviceId(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.regenerateDeviceId();
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setOptOut(String instanceName, boolean optOut, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setOptOut(optOut);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setLibraryName(String instanceName, String libraryName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setLibraryName(libraryName);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setLibraryVersion(String instanceName, String libraryVersion, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setLibraryVersion(libraryVersion);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void trackingSessionEvents(String instanceName, boolean trackingSessionEvents, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.trackSessionEvents(trackingSessionEvents);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setUseDynamicConfig(String instanceName, boolean useDynamicConfig, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setUseDynamicConfig(useDynamicConfig);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setUserId(String instanceName, String userId, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setUserId(userId);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setServerUrl(String instanceName, String serverUrl, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setServerUrl(serverUrl);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void logRevenueV2(String instanceName, JSONObject properties, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            Revenue revenue = populateRevenue(properties);
            client.logRevenueV2(revenue);
            promise.resolve(true);
        }
    }

    // TODO: Correct the signature and finish the impl
    @ReactMethod
    public void identify(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            Identify identify = new Identify();
            identify = createIdentify();
            client.identify(identify);
            promise.resolve(true);
        }
    }

    // TODO: Correct the signature and finish the impl
    @ReactMethod
    public void groupIdentify(String instanceName, String groupType, String groupName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            Identify identify = new Identify();
            identify = createIdentify();
            client.groupIdentify(groupType, groupName, identify);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setUserProperties(String instanceName, JSONObject userProperties, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setUserProperties(userProperties);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void clearUserProperties(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.clearUserProperties();
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setGroup(String instanceName, String groupType, String groupName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setGroup(groupType, groupName);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void uploadEvents(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.uploadEvents();
            promise.resolve(true);
        }
    }

    private Revenue populateRevenue(JSONObject properties) {
        Revenue revenue = new Revenue();
        try {
            if (properties.has("productId")) {
                revenue.setProductId(properties.getString("productId"));
            } 
            if (properties.has("price")) {
                revenue.setPrice(properties.getDouble("price"));
            }
            if (properties.has("quantity")) {
                revenue.setQuantity(properties.getInt("quantity"));
            } else {
                revenue.setQuantity(1);
            }
            if (properties.has("revenueType")) {
                revenue.setRevenueType(properties.getString("revenueType"));
            }
            if (properties.has("receipt") && properties.has("receiptSignature")) {
                String receipt = properties.getString("receipt");
                String receiptSignature = properties.getString("receiptSignature"); 
                revenue.setReceipt(receipt, receiptSignature);
            }
            if (properties.has("eventProperties")) {
                revenue.setEventProperties(properties.getJSONObject("eventProperties"));
            }
        } catch(JSONException e) {
            //do nothing
        }
        return revenue;
    }

    // TODO: Implement this
    private Identify createIdentify() {
        Identify identify = new Identify();
        return identify;
    }
}
