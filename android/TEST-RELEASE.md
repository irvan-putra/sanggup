# Sanggup 0.1.1 test APK

Experimental Android build. Package `com.vanipy.sanggup`, Android 8.0/API 26 or newer. This is not a store release or a claim of production readiness.

- All 20 starter learning paths are bundled offline. The app requests no Android permissions.
- Original Sang frame animation in the native header, plus a home-screen learning-streak widget using native ViewFlipper frames.
- Local practice logging counts at most one streak day per local calendar day. It does not prove skill competency.
- Browser progress and Android progress are separate. No account, cloud sync or cross-device teacher sign-off. Do not uninstall or clear storage to troubleshoot without backing up anything you need; progress is local.
- Sang currently appears in both the native header and the bundled web page.

## Changes since 0.1.0

Lowercase launcher name, shared bottom version-strip style in legacy/adaptive/themed icons, and a compact horizontal2x1 widget target. The six Sang frames, local streak and tap-to-open remain; resizing taller retains the larger presentation. Actual grid size depends on the launcher. Existing widgets may keep their allocated space until resized or re-added; removing a widget is not uninstalling the app.

Update over0.1.0 with the same package and release key. Do not uninstall or clear storage, which would remove local progress. The user reported0.1.0 home-screen animation working on their phone. That is user-reported evidence, not a screen recording or proof of the new compact size on that phone.

## Verification and limits

The debug build loaded all 20 skill tiles on an Android 14 emulator. A test clicked the actual web practice-log button and checked that the native streak and hosted widget became 1 day. A real AppWidgetHostView test observed all six animation frames advancing and saved inspected screenshots.

This hosted-widget test is not proof of placement or animation on Pixel Launcher, Samsung One UI or every launcher. Widget resizing, long-running power behaviour and different Android versions remain untested. Widget refresh is OS-scheduled, so the displayed streak can lag a date change until its next refresh or app interaction.

The release workflow checks the package, version, lack of permissions, signing certificate and checksum, and attempts a launch smoke of the signed asset. A successful process launch alone does not prove the complete app or widget flow on a physical phone.

The learning paths are general education. Swimming, driving, first aid and rescue require appropriate hands-on instruction and supervision. Completing or signing off a demo stage is not a qualification.

## Integrity

Signed with the Sanggup release key. Certificate SHA-256:

`C22B004F08852CDB330BCF3A5D899FA0E1CD14FA2D3D5E1A44D15DC7EFBB7C23`

The attached `.sha256` file records the APK checksum. Future releases must preserve this signing identity to update this installation. The signing key is stored in encrypted repository secrets, not in source control.

Source is available in this repository under AGPL-3.0. See `docs/mascot-similarity.md` for the limited mascot review, which is not legal clearance.
