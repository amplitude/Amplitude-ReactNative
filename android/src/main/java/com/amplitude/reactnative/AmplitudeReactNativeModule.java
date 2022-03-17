package com.amplitude.reactnative;

import androidx.annotation.NonNull;

import com.amplitude.api.Amplitude;
import com.amplitude.api.AmplitudeClient;
import com.amplitude.api.AmplitudeServerZone;
import com.amplitude.api.Identify;
import com.amplitude.api.Revenue;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.ReadableMap;

import org.json.JSONObject;
import org.json.JSONException;
import org.json.JSONArray;

import java.util.Iterator;

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
    public void logEventWithProperties(String instanceName, String eventType, ReadableMap eventProperties, Promise promise) throws JSONException {
        JSONObject convertedEventProperties = ReactNativeHelper.convertMapToJson(eventProperties);
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.logEvent(eventType, convertedEventProperties);
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
    public void setDeviceId(String instanceName, String deviceId, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setDeviceId(deviceId);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void getDeviceId(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            promise.resolve(client.getDeviceId());
        }
    }

    @ReactMethod
    public void setAdvertisingIdForDeviceId(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.useAdvertisingIdForDeviceId();
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setAppSetIdForDeviceId(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.useAppSetIdForDeviceId();
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
    public void logRevenueV2(String instanceName, ReadableMap properties, Promise promise) throws JSONException {
        JSONObject revenueProperties = ReactNativeHelper.convertMapToJson(properties);
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            Revenue revenue = createRevenue(revenueProperties);
            client.logRevenueV2(revenue);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void identify(String instanceName, ReadableMap userProperties, Promise promise) throws JSONException {
        JSONObject identifyProperties = ReactNativeHelper.convertMapToJson(userProperties);
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            Identify identify = createIdentify(identifyProperties);
            client.identify(identify);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void groupIdentify(String instanceName, String groupType, String groupName, ReadableMap userProperties, Promise promise) throws JSONException {
        JSONObject groupIdentifyProperties = ReactNativeHelper.convertMapToJson(userProperties);
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            Identify identify = createIdentify(groupIdentifyProperties);
            client.groupIdentify(groupType, groupName, identify);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setUserProperties(String instanceName, ReadableMap userProperties, Promise promise) throws JSONException {
        JSONObject properties = ReactNativeHelper.convertMapToJson(userProperties);
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setUserProperties(properties);
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

    @ReactMethod
    public void getSessionId(String instanceName, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            promise.resolve((double)client.getSessionId());
        }
    }

    @ReactMethod
    public void setMinTimeBetweenSessionsMillis(String instanceName, double minTimeBetweenSessionsMillis, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setMinTimeBetweenSessionsMillis((long) minTimeBetweenSessionsMillis);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setServerZone(String instanceName, String serverZone, boolean updateServerUrl, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            AmplitudeServerZone amplitudeServerZone = serverZone.equals("EU") ? AmplitudeServerZone.EU : AmplitudeServerZone.US;
            client.setServerZone(amplitudeServerZone, updateServerUrl);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setEventUploadMaxBatchSize(String instanceName, int eventUploadMaxBatchSize, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setEventUploadMaxBatchSize(eventUploadMaxBatchSize);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setEventUploadPeriodMillis(String instanceName, int eventUploadPeriodMillis, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setEventUploadPeriodMillis(eventUploadPeriodMillis);
            promise.resolve(true);
        }
    }

    @ReactMethod
    public void setEventUploadThreshold(String instanceName, int eventUploadThreshold, Promise promise) {
        AmplitudeClient client = Amplitude.getInstance(instanceName);
        synchronized (client) {
            client.setEventUploadThreshold(eventUploadThreshold);
            promise.resolve(true);
        }
    }

    private Revenue createRevenue(JSONObject properties) {
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

    private Identify createIdentify(JSONObject userProperties) {
        Identify identify = new Identify();
        Iterator<String> operations = userProperties.keys();
        while(operations.hasNext()) {
            String operation = operations.next();
            try {
                JSONObject userPropertiesObj = userProperties.getJSONObject(operation);
                Iterator<String> keys = userPropertiesObj.keys();
                while(keys.hasNext()) {
                    String key = keys.next();
                    switch(operation) {
                        case "$add":
                            if ((Object)userPropertiesObj.get(key) instanceof Double){
                                identify.add(key, userPropertiesObj.getDouble(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Integer){
                                identify.add(key, userPropertiesObj.getInt(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Long) {
                                identify.add(key, userPropertiesObj.getLong(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof String) {
                                identify.add(key, userPropertiesObj.getString(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof JSONObject) {
                                identify.add(key, userPropertiesObj.getJSONObject(key));
                            }
                        case "$append":
                            if ((Object)userPropertiesObj.get(key) instanceof Double){
                                identify.append(key, userPropertiesObj.getDouble(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Integer){
                                identify.append(key, userPropertiesObj.getInt(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Long) {
                                identify.append(key, userPropertiesObj.getLong(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof String) {
                                identify.append(key, userPropertiesObj.getString(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof JSONObject) {
                                identify.append(key, userPropertiesObj.getJSONObject(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof JSONArray) {
                                identify.append(key, userPropertiesObj.getJSONArray(key));
                            }
                        case "$prepend":
                            if ((Object)userPropertiesObj.get(key) instanceof Double){
                                identify.prepend(key, userPropertiesObj.getDouble(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Integer){
                                identify.prepend(key, userPropertiesObj.getInt(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Long) {
                                identify.prepend(key, userPropertiesObj.getLong(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof String) {
                                identify.prepend(key, userPropertiesObj.getString(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof JSONObject) {
                                identify.prepend(key, userPropertiesObj.getJSONObject(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof JSONArray) {
                                identify.prepend(key, userPropertiesObj.getJSONArray(key));
                            }
                        case "$set":
                            if ((Object)userPropertiesObj.get(key) instanceof Double){
                                identify.set(key, userPropertiesObj.getDouble(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Integer){
                                identify.set(key, userPropertiesObj.getInt(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Long) {
                                identify.set(key, userPropertiesObj.getLong(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof String) {
                                identify.set(key, userPropertiesObj.getString(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof JSONObject) {
                                identify.set(key, userPropertiesObj.getJSONObject(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof JSONArray) {
                                identify.set(key, userPropertiesObj.getJSONArray(key));
                            }
                        case "$setOnce":
                            if ((Object)userPropertiesObj.get(key) instanceof Double){
                                identify.setOnce(key, userPropertiesObj.getDouble(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Integer){
                                identify.setOnce(key, userPropertiesObj.getInt(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof Long) {
                                identify.setOnce(key, userPropertiesObj.getLong(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof String) {
                                identify.setOnce(key, userPropertiesObj.getString(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof JSONObject) {
                                identify.setOnce(key, userPropertiesObj.getJSONObject(key));
                            } else if ((Object)userPropertiesObj.get(key) instanceof JSONArray) {
                                identify.setOnce(key, userPropertiesObj.getJSONArray(key));
                            }
                        case "$unset":
                            identify.unset(key); // value is default to `-`
                        default:
                            break;
                    }
                }
            } catch (JSONException e) {
                //do nothing
            }
        }
        return identify;
    }
}
