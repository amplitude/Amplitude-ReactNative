# Updated Section for: Session Replay React Native Standalone SDK

## Location
**Page:** https://amplitude.com/docs/sdks/session-replay/session-replay-react-native-standalone-sdk

**Section:** Configuration table + "Mask onscreen data" section

---

## CONFIGURATION TABLE (Already correct, but verify description)

The standalone SDK already documents `maskLevel`, but verify the description is clear:

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `maskLevel` | `MaskLevel` | No | `MaskLevel.Medium` | Level of automatic masking applied to sensitive content. Options: `MaskLevel.Light`, `MaskLevel.Medium`, `MaskLevel.Conservative`. See "Mask onscreen data" section for details. |

**Note:** The standalone SDK uses an enum `MaskLevel` while the plugin SDK uses string literals (`'light'`, `'medium'`, `'conservative'`). Both are functionally equivalent.

---

## UPDATED "MASK ONSCREEN DATA" SECTION

Enhance the current section to better explain automatic masking:

### Mask onscreen data

Session Replay provides two complementary approaches to protect sensitive data:

#### Automatic masking with maskLevel

Configure automatic masking to apply privacy rules across your entire application:

```javascript
import { init, SessionReplayConfig, MaskLevel } from '@amplitude/session-replay-react-native';

const config: SessionReplayConfig = {
    apiKey: 'YOUR_API_KEY',
    deviceId: 'YOUR_DEVICE_ID',
    sessionId: Date.now(),
    sampleRate: 1,
    enableRemoteConfig: true,
    autoStart: true,
    maskLevel: MaskLevel.Conservative, // Automatically masks all text and form inputs
};

await init(config);
```

**Available mask levels:**

- **`MaskLevel.Conservative`**: Masks all text content and form fields for maximum privacy. Best for applications handling highly sensitive data (healthcare, finance, legal).
- **`MaskLevel.Medium`**: (Default) Masks form inputs and sensitive text fields while keeping other UI text visible. Suitable for most applications.
- **`MaskLevel.Light`**: Masks only highly sensitive inputs like passwords, credit card numbers, and other PII fields. Best for applications with minimal sensitive data.

You can also control masking via **remote configuration** by setting `enableRemoteConfig: true` and configuring the masking level in your Amplitude project settings (Settings > Organizational Settings > Session Replay Settings). Remote configuration overrides the SDK-level `maskLevel` setting.

#### Manual component-level masking with AmpMaskView

For fine-grained control beyond automatic masking, wrap specific components with `AmpMaskView`:

**Mask a view:**

```javascript
import { AmpMaskView } from '@amplitude/session-replay-react-native';

<AmpMaskView mask="amp-mask">
  <Text>{sensitiveUserData}</Text>
</AmpMaskView>
```

**Unmask a view** (useful when you want to exclude something from automatic masking):

```javascript
import { AmpMaskView } from '@amplitude/session-replay-react-native';

<AmpMaskView mask="amp-unmask">
  <Text>{publicInfoThatShouldAlwaysBeVisible}</Text>
</AmpMaskView>
```

**Block a view** (excludes it entirely from recording):

```javascript
import { AmpMaskView } from '@amplitude/session-replay-react-native';

<AmpMaskView mask="amp-block">
  <SensitiveComponent />
</AmpMaskView>
```

**Best practice:** Use automatic masking (`maskLevel`) as your baseline privacy policy, then use `AmpMaskView` to refine specific areas as needed.

---

## NOTES FOR IMPLEMENTATION

1. **Enum vs String:** Note the difference between the standalone SDK (uses `MaskLevel` enum) and plugin SDK (uses string literals)
2. **Examples:** Consider adding a visual example showing what each mask level looks like
3. **Remote config:** Emphasize that remote config works for both standalone and plugin SDKs
