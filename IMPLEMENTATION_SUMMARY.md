# React Native Session Replay Masking Documentation Update - Implementation Summary

## Executive Summary

**Linear Ticket:** SDKRN-13 - Update React Native Session Replay masking guidance  
**Related Fix:** SDKRN-9 / SDKRN-11 (PR #1771 - merged June 3, 2026)  
**Status:** Ready for docs team to implement

## What Changed

PR #1771 added **automatic masking** support to the React Native Session Replay Plugin SDK via the `maskLevel` configuration option. Previously, the SDK always defaulted to `MEDIUM` masking regardless of configuration. Now users can properly configure `Light`, `Medium`, or `Conservative` masking levels.

**Key Technical Details:**
- The `maskLevel` config is now wired through the JS → Native bridge (iOS & Android)
- Available in `@amplitude/plugin-session-replay-react-native` v0.4.11+
- Brings plugin SDK to feature parity with the standalone SDK
- Supports three levels: `'conservative'`, `'medium'` (default), `'light'`
- Compatible with remote configuration from Amplitude UI

## Documentation Updates Required

### Three Pages Need Updates:

1. **Manage Privacy Settings for Session Replay**
   - URL: https://amplitude.com/docs/session-replay/manage-privacy-settings-for-session-replay
   - File: `docs-update-privacy-settings.md`
   - Action: Replace "React Native remote masking limitations" warning section

2. **Session Replay React Native SDK Plugin**
   - URL: https://amplitude.com/docs/sdks/session-replay/session-replay-react-native-sdk-plugin
   - File: `docs-update-plugin-sdk.md`
   - Action: Add `maskLevel` to configuration table + enhance "Mask onscreen data" section

3. **Session Replay React Native Standalone SDK**
   - URL: https://amplitude.com/docs/sdks/session-replay/session-replay-react-native-standalone-sdk
   - File: `docs-update-standalone-sdk.md`
   - Action: Enhance "Mask onscreen data" section (config table already correct)

## Files Included in This PR

- `DOC_UPDATE_SPEC.md` - Detailed specification with background and context
- `docs-update-privacy-settings.md` - New content for privacy settings page
- `docs-update-plugin-sdk.md` - New content for plugin SDK page
- `docs-update-standalone-sdk.md` - New content for standalone SDK page
- `IMPLEMENTATION_SUMMARY.md` - This file

## Key Messaging Changes

### OLD Message (Incorrect):
> "React Native remote masking may be unstable and not work as expected. For React Native applications, Amplitude recommends that you implement masking manually using the AmpMaskView component."

### NEW Message (Correct):
> React Native Session Replay supports automatic masking through both remote configuration and SDK-level settings. Configure masking levels (Conservative, Medium, Light) either from the Amplitude UI or directly in your SDK configuration. For fine-grained control, combine automatic masking with manual component-level masking using AmpMaskView.

## Implementation Checklist for Docs Team

- [ ] Verify the npm version that includes the fix (likely 0.4.11 or 0.4.12)
- [ ] Map the three documentation pages to their source files in `amplitude/amplitude-docs` repository
- [ ] Apply the content updates from the three `docs-update-*.md` files
- [ ] Add version badges where indicated ("Available from v0.4.11+")
- [ ] Update all cross-references and internal links
- [ ] Run Vale/lint checks
- [ ] Test code examples to ensure they work
- [ ] Create preview in Vercel
- [ ] Tag @tech-writers for review
- [ ] Publish after approval

## Related Jira Issues

- **DOC-1278** - "Clarify React Native Masking Limitations" (marked "Won't Do" before fix)
  - This issue identified the problem; our changes address it
- **AMP-130619** - "SR remote masking is not working as expected in React Native" (Closed)
  - Customer issue that led to the fix
- **SR-2045** - "Blank IOS SR but you can see cursor moving" (Done)
  - Related masking issue

## PR Details

- **Repository:** amplitude/Amplitude-TypeScript
- **PR Number:** #1771
- **Title:** feat(plugin-session-replay-react-native): pass maskLevel through to native SessionReplay
- **Author:** aliaksandr-kazarez
- **Merged:** June 3, 2026
- **Linear Tickets:** SDKRN-11 (implementation) + SDKRN-9 (parent)

## Testing Notes

The PR includes comprehensive tests:
- 8 passing tests for default config, enum values, and native forwarding
- Tests for all three mask levels: Conservative, Light, Medium
- Tests for default fallback when maskLevel is not provided
- Verified on both iOS (Swift) and Android (Kotlin) bridges

## Contact

- **Slack Channel:** #docs-vibe-author
- **Tech Writers:** @tech-writers
- **SDK Team:** @aliaksandr-kazarez (PR author)

## Timeline

- **Fix Merged:** June 3, 2026 (PR #1771)
- **npm Release:** ~June 2026 (v0.4.11+)
- **Docs Update Requested:** June 5, 2026 (SDKRN-13)
- **Documentation Prepared:** June 5, 2026 (this PR)
- **Target Publication:** ASAP after tech writer review

---

**Next Steps:** Docs team should apply these updates to the `amplitude/amplitude-docs` repository and create a PR for tech writer review.
