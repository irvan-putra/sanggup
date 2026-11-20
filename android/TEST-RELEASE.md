# Sanggup 0.1.4 test APK

Experimental Android build. Package `com.vanipy.sanggup`, Android 8.0/API 26 or newer. This is not a store release or a claim of production readiness.

- All 25 learning paths are bundled offline, on a 5x5 grid. The app requests no Android permissions.
- Original Sang frame animation in the native header, plus a home-screen learning-streak widget using native ViewFlipper frames.
- Local practice logging counts at most one streak day per local calendar day. It does not prove skill competency.
- Browser progress and Android progress are separate. No account, cloud sync or cross-device teacher sign-off. Do not uninstall or clear storage to troubleshoot without backing up anything you need; progress is local.
- Sang currently appears in both the native header and the bundled web page.

## Changes since 0.1.3

The grid goes from 30 tiles to 25 by merging overlapping paths, with no content cut: FIRE moves into Money; Content creator into Branding; Journalism and reporting into Writing; Community building into Network; Habits into Focus; Calm into Self care; Business operations into Projects. Every stage keeps its id, so existing stage progress and pending sign-off requests carry over. Each merged path keeps both paths' limits notes. A new Career moves path (evidence-based CV, STAR stories, interview practice, a real application loop) and the business frameworks (OKR, KPI, SOP, RACI, continuity) are included for the first time in the APK, as are the bidirectional "Shared skill" labels that name where else a skill is practiced. Nine paths gain deeper stages, including closing hands-on milestones for First aid, Swimming and Driving that record attendance or practice only, never qualification. Cooking gains the limits note and source it lacked. No feature, permission or signing changes; the widget, streak and animation are unchanged from 0.1.3.

Update over 0.1.3 with the same package and release key. Do not uninstall or clear storage, which would remove local progress.

## Verification and limits

The debug build loaded all 25 skill tiles on an Android 14 emulator. A real AppWidgetHostView test observed all 25 tiles and the animation frames advancing. The release workflow checks the package, version, lack of permissions, signing certificate and checksum, and attempts a launch smoke of the signed asset. A successful process launch alone does not prove the complete app or widget flow on a physical phone.

A signed 0.1.3-to-0.1.4 in-place upgrade check runs after publication via the Signed upgrade data retention workflow. Its result is stated here only after the run completes; do not deliver this APK to people before it passes. Result: pending at publication time.

This hosted-widget test is not proof of placement or animation on Pixel Launcher, Samsung One UI or every launcher. Widget resizing, long-running power behaviour and different Android versions remain untested. Widget refresh is OS-scheduled, so the displayed streak can lag a date change until its next refresh or app interaction. The widget emulator test has failed intermittently in CI with two distinct one-off environment errors and passed on a single rerun each time; the cause is unproven.

The learning paths are general education. Swimming, driving, first aid and rescue require appropriate hands-on instruction and supervision. Completing or signing off a demo stage is not a qualification.

## Integrity

Signed with the Sanggup release key. Certificate SHA-256:

`C22B004F08852CDB330BCF3A5D899FA0E1CD14FA2D3D5E1A44D15DC7EFBB7C23`

The attached `.sha256` file records the APK checksum. Future releases must preserve this signing identity to update this installation. The signing key is stored in encrypted repository secrets, not in source control.

Source is available in this repository under AGPL-3.0. See `docs/mascot-similarity.md` for the limited mascot review, which is not legal clearance.
