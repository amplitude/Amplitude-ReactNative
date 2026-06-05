# React Native Session Replay Masking Documentation Update

## Context
Linear Ticket: SDKRN-13 - Update React Native Session Replay masking guidance
Related: SDKRN-9 (auto masking fix)
Related Jira: DOC-1278

## Background
The current documentation contains a warning that states:
> "React Native remote masking may be unstable and not work as expected. For React Native applications, Amplitude recommends that you implement masking manually using the AmpMaskView component."

This warning has caused customer confusion because:
1. It's unclear whether it applies only to remote/UI-based masking or also to SDK-level `maskLevel` settings
2. Customers assume SDK-level `maskLevel.Conservative` is a reliable fallback

## Documentation Pages to Update

### 1. Manage Privacy Settings for Session Replay
**URL:** https://amplitude.com/docs/session-replay/manage-privacy-settings-for-session-replay

**Current Section:** "React Native remote masking limitations"

**Location in content:**
- In the `content/collections/` directory structure
- Under the Session Replay privacy settings documentation

**Current Text:**
```markdown
React Native remote masking limitations

React Native remote masking may be unstable and not work as expected. For React Native applications, Amplitude recommends that you implement masking manually using the`AmpMaskView` component. For more information, refer to Mask onscreen data in the React Native Session Replay documentation.
```

**Proposed Update (Option 1 - If auto masking IS now fixed):**
```markdown
### React Native masking

React Native Session Replay now supports automatic masking through both:
- **Remote configuration:** Configure masking levels (Conservative, Medium, Light) from the Amplitude UI
- **SDK-level configuration:** Set `maskLevel` in your `SessionReplayConfig`

For more control over masking behavior, you can also implement manual masking at the component level using the `AmpMaskView` component. For more information, refer to [Mask onscreen data](link-to-react-native-docs) in the React Native Session Replay documentation.
```

**Proposed Update (Option 2 - If auto masking is still limited, clarify the limitation):**
```markdown
### React Native masking limitations

⚠️ **React Native masking limitation:** On React Native, both UI-based (remote config) masking and SDK-level `maskLevel` settings (e.g., `MaskLevel.Conservative`) behave the same way — they may not reliably detect and mask all text elements by default. This is a known limitation of how the React Native client works.

For React Native applications, Amplitude recommends implementing masking manually at the component level using `AmpMaskView`. Use `mask="amp-mask"` to mask sensitive content and `mask="amp-unmask"` to selectively expose non-sensitive elements. For more information, refer to [Mask onscreen data](link-to-react-native-docs) in the React Native Session Replay documentation.
```

### 2. Session Replay React Native SDK Plugin
**URL:** https://amplitude.com/docs/sdks/session-replay/session-replay-react-native-sdk-plugin

**Section:** "Mask onscreen data"

**Current Text:** (Already explains AmpMaskView usage)

**Potential Addition (if auto masking now works):**
```markdown
### Automatic masking with maskLevel

In addition to manual masking with `AmpMaskView`, you can configure automatic masking using the `maskLevel` configuration option:

```javascript
import { SessionReplayPlugin, MaskLevel } from '@amplitude/plugin-session-replay-react-native';

const config: SessionReplayConfig = {
    enableRemoteConfig: true,
    sampleRate: 1,
    maskLevel: MaskLevel.Conservative, // Automatically masks all text and form inputs
    autoStart: true,
};
await init('YOUR_API_KEY').promise;
await add(new SessionReplayPlugin(config)).promise;
```

Available mask levels:
- `MaskLevel.Conservative`: Masks all text and form fields
- `MaskLevel.Medium`: Masks form inputs and sensitive fields only
- `MaskLevel.Light`: Masks only highly sensitive inputs (passwords, credit cards)

You can also control masking via remote configuration by setting `enableRemoteConfig: true` and configuring the masking level in your Amplitude project settings.

### Manual masking with AmpMaskView

For more granular control, use the `AmpMaskView` component to mask specific sections:
```

### 3. Session Replay React Native Standalone SDK
**URL:** https://amplitude.com/docs/sdks/session-replay/session-replay-react-native-standalone-sdk

**Similar updates** to the ones above, adapted for the standalone SDK configuration.

## Implementation Notes

1. **If SDKRN-9 fixed auto masking:** Use Option 1 updates, adding clear examples of how to use `maskLevel` configuration
2. **If SDKRN-9 clarified the limitation:** Use Option 2 updates, making it explicit that the limitation applies to both remote and SDK-level masking
3. **Cross-references:** Ensure all internal links between the three documentation pages are updated and working

## Verification Steps

After updating:
1. Test that the configuration examples work as documented
2. Verify all internal links are valid
3. Check that the warning/callout boxes render correctly
4. Ensure consistency across Plugin SDK and Standalone SDK docs
5. Run Vale/lint checks on the documentation

## Questions RESOLVED ✅

1. **Has SDKRN-9 actually fixed auto masking for React Native?** 
   - ✅ YES! PR #1771 (implementing SDKRN-9 & SDKRN-11) was merged June 3, 2026
   - Adds `maskLevel` configuration support to React Native Session Replay Plugin SDK
   - Previously plugin always defaulted to `MEDIUM` regardless of config
   - Now supports: `'light'`, `'medium'`, `'conservative'` mask levels

2. **What SDK version includes the fix?**
   - ✅ `@amplitude/plugin-session-replay-react-native` version **0.4.11+** (released ~June 2026)
   - The standalone SDK (`@amplitude/session-replay-react-native`) already had this feature

3. **Should we add a version note?**
   - ✅ YES - documentation should indicate "Available from v0.4.11+" for the plugin SDK
   - No version note needed for standalone SDK (already supported)

4. **Are there any migration steps?**
   - ✅ No breaking changes - existing `AmpMaskView` usage continues to work
   - Users can optionally add `maskLevel` configuration for automatic masking
   - Recommended: Use `maskLevel` as baseline, `AmpMaskView` for fine-tuning

## Related Issues

- DOC-1278: Clarify React Native Masking Limitations in Privacy Settings Documentation (Jira - Won't Do)
- AMP-130619: SR remote masking is not working as expected in React Native (Jira - Closed)
- SR-2045: Blank IOS SR but you can see cursor moving (Jira - Done)
- GitHub Issue #1271: Session replays (React Native): Mask content with attribute instead of MaskView

## Contact

For questions about this documentation update:
- Slack: #docs-vibe-author
- Related engineer: (to be filled in)
- Tech writers: @tech-writers
