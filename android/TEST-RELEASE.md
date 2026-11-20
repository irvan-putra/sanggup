# Sanggup 0.1.3 test APK

Experimental Android build. Package `com.vanipy.sanggup`, Android 8.0/API 26 or newer. This is not a store release or a claim of production readiness.

- All 30 starter learning paths are bundled offline. The app requests no Android permissions.
- Original Sang frame animation in the native header, plus a home-screen learning-streak widget using native ViewFlipper frames.
- Local practice logging counts at most one streak day per local calendar day. It does not prove skill competency.
- Browser progress and Android progress are separate. No account, cloud sync or cross-device teacher sign-off. Do not uninstall or clear storage to troubleshoot without backing up anything you need; progress is local.
- Sang currently appears in both the native header and the bundled web page.

## Changes since 0.1.2

The bundled paths go from 25 to 30 with the same five-column grid, now six rows. New paths: Self care, Public speaking, Presentation, Journalism and reporting (one combined path), Surveying people, Teaching and mentoring, and Negotiation. Consulting and Freelancing are merged into Client work, and Prioritizing and Deciding into Decisions and priorities; existing stage progress is preserved because progress is keyed by stage id. Common working frameworks (the 4D mnemonic, RACI, STAR, KPI/OKR, SOP and continuity planning) are folded into the relevant existing paths' lessons rather than added as separate paths. Each path follows the existing model: ordered practice stages, a stated limits note, public sources, and practical milestones that need instructor sign-off. No feature, permission or signing changes; the widget, streak and animation are unchanged from 0.1.2.

Update over 0.1.2 with the same package and release key. Do not uninstall or clear storage, which would remove local progress.

## Verification and limits

The debug build loaded all 30 skill tiles on an Android 14 emulator. A test clicked the actual web practice-log button and checked that the native streak and hosted widget became 1 day. A real AppWidgetHostView test observed all six animation frames advancing and saved inspected screenshots. A signed 0.1.2-to-0.1.3 in-place upgrade retained a synthetic 1-day practice streak with no uninstall or data clear.

This hosted-widget test is not proof of placement or animation on Pixel Launcher, Samsung One UI or every launcher. Widget resizing, long-running power behaviour and different Android versions remain untested. Widget refresh is OS-scheduled, so the displayed streak can lag a date change until its next refresh or app interaction.

The release workflow checks the package, version, lack of permissions, signing certificate and checksum, and attempts a launch smoke of the signed asset. A successful process launch alone does not prove the complete app or widget flow on a physical phone.

The learning paths are general education. Swimming, driving, first aid and rescue require appropriate hands-on instruction and supervision. Completing or signing off a demo stage is not a qualification.

## Integrity

Signed with the Sanggup release key. Certificate SHA-256:

`C22B004F08852CDB330BCF3A5D899FA0E1CD14FA2D3D5E1A44D15DC7EFBB7C23`

The attached `.sha256` file records the APK checksum. Future releases must preserve this signing identity to update this installation. The signing key is stored in encrypted repository secrets, not in source control.

Source is available in this repository under AGPL-3.0. See `docs/mascot-similarity.md` for the limited mascot review, which is not legal clearance.
