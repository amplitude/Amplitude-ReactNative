# Updated Section for: Session Replay React Native SDK Plugin

## Location
**Page:** https://amplitude.com/docs/sdks/session-replay/session-replay-react-native-sdk-plugin

**Section:** Configuration table + "Mask onscreen data" section

---

## UPDATED CONFIGURATION TABLE

Add this new row to the configuration table (after `autoStart`):

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `maskLevel` | `'light' \| 'medium' \| 'conservative'` | No | `'medium'` | Level of automatic masking applied to sensitive content. `'conservative'` masks all text and form fields, `'medium'` masks form inputs and sensitive fields, `'light'` masks only highly sensitive inputs (passwords, credit cards). Available from version 0.4.11+. |

---

## UPDATED "MASK ONSCREEN DATA" SECTION

Replace the current "Mask onscreen data" section with the following:

### Mask onscreen data

Session Replay provides two complementary approaches to protect sensitive data in your React Native application:

#### Automatic masking with maskLevel

Configure automatic masking using the `maskLevel` option to apply privacy rules across your entire application:

```javascript
import { SessionReplayPlugin } from '@amplitude/plugin-session-replay-react-native';

const config: SessionReplayConfig = {
    enableRemoteConfig: true,
    sampleRate: 1,
    maskLevel: 'conservative', // Automatically masks all text and form inputs
    autoStart: true,
};

await init('YOUR_API_KEY').promise;
await add(new SessionReplayPlugin(config)).promise;
```

**Available mask levels:**

- **`'conservative'`**: Masks all text content and form fields for maximum privacy. Best for applications handling highly sensitive data (healthcare, finance, legal).
- **`'medium'`**: (Default) Masks form inputs and sensitive text fields while keeping other UI text visible. Suitable for most applications.
- **`'light'`**: Masks only highly sensitive inputs like passwords, credit card numbers, and other PII fields. Best for applications with minimal sensitive data.

You can also control masking via **remote configuration** by setting `enableRemoteConfig: true` and configuring the masking level in your Amplitude project settings (Settings > Organizational Settings > Session Replay Settings). Remote configuration overrides the SDK-level `maskLevel` setting.

**Note:** Automatic masking is available from `@amplitude/plugin-session-replay-react-native` version 0.4.11 and later (released June 2026).

#### Manual component-level masking with AmpMaskView

For fine-grained control beyond automatic masking, use the `AmpMaskView` component to mask or unmask specific sections:

**Mask a specific component:**

```javascript
import { AmpMaskView } from "@amplitude/plugin-session-replay-react-native";

<AmpMaskView mask="amp-mask">
  <Text
    style={[
      styles.sectionTitle,
      {
        color: isDarkMode ? Colors.white : Colors.black,
      },
    ]}
  >
    {sensitiveUserData}
  </Text>
</AmpMaskView>
```

**Unmask a component** (useful when you want to exclude something from automatic masking):

```javascript
import { AmpMaskView } from "@amplitude/plugin-session-replay-react-native";

<AmpMaskView mask="amp-unmask">
  <Text
    style={[
      styles.sectionTitle,
      {
        color: isDarkMode ? Colors.white : Colors.black,
      },
    ]}
  >
    {publicInfoThatShouldAlwaysBeVisible}
  </Text>
</AmpMaskView>
```

**Best practice:** Use automatic masking (`maskLevel`) as your baseline privacy policy, then use `AmpMaskView` with `amp-mask` to protect specific sensitive fields and `amp-unmask` to selectively expose safe UI elements.

---

## NOTES FOR IMPLEMENTATION

1. **Add version badge:** Make sure to include a note about version 0.4.11+ requirement
2. **Update quickstart:** Consider adding `maskLevel` to the quickstart example at the top of the page
3. **Cross-reference:** Add a link to the privacy settings documentation page
4. **Visual hierarchy:** Consider using collapsible sections or tabs to separate "Automatic masking" from "Manual masking"
