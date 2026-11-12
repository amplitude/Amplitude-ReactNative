# Updated Section for: Manage Privacy Settings for Session Replay

## Location
**Page:** https://amplitude.com/docs/session-replay/manage-privacy-settings-for-session-replay

**Section to Replace:** "React Native remote masking limitations"

---

## NEW CONTENT (Replace existing warning)

### React Native masking

React Native Session Replay supports automatic masking through both remote configuration and SDK-level settings.

**Configuration methods:**

1. **Remote configuration (UI-based):** Configure masking levels (Conservative, Medium, Light) from Settings > Organizational Settings > Session Replay Settings in the Amplitude UI. Requires `enableRemoteConfig: true` in your SDK configuration.

2. **SDK-level configuration:** Set `maskLevel` directly in your `SessionReplayConfig` when initializing the Session Replay plugin or standalone SDK.

**Available mask levels:**

- **Conservative:** Masks all text and form fields for maximum privacy
- **Medium:** (Default) Masks form inputs and sensitive text fields  
- **Light:** Masks only highly sensitive inputs like passwords and credit cards

**SDK support:**

- Available in `@amplitude/plugin-session-replay-react-native` version **0.4.11+** (released June 2026)
- Available in `@amplitude/session-replay-react-native` (standalone SDK) all versions

For fine-grained control, you can combine automatic masking with manual component-level masking using the `AmpMaskView` component. For more information, refer to [Mask onscreen data](#) in the React Native Session Replay documentation.

---

## NOTES FOR IMPLEMENTATION

1. **Version requirement:** The fix was merged in PR #1771 on June 3, 2026. Check which npm version includes this fix (likely 0.4.11 or later).

2. **Add version badge:** Consider adding a version badge like "Available from v0.4.11" or similar.

3. **Test the remote config:** Confirm that remote configuration (set from Amplitude UI) now works reliably for React Native before removing the "may be unstable" warning entirely.

4. **Cross-reference:** Update links to point to the correct React Native masking documentation sections.

5. **Previous warning (for reference):**
   > React Native remote masking may be unstable and not work as expected. For React Native applications, Amplitude recommends that you implement masking manually using the AmpMaskView component.
