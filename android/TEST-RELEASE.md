# Sanggup 0.2.4 test APK

Experimental Android build. Package `com.vanipy.sanggup`, Android 8.0/API 26 or newer. This is not a store release or a claim of production readiness.

- All 25 learning paths are bundled offline, on a 5x5 grid. The app requests no Android permissions.
- Original Sang frame animation in the native header, plus a home-screen learning-streak widget using native ViewFlipper frames.
- Local practice logging counts at most one streak day per local calendar day. It does not prove skill competency.
- Browser progress and Android progress are separate. No account, cloud sync or cross-device teacher sign-off. Do not uninstall or clear storage to troubleshoot without backing up anything you need; progress is local.
- Sang currently appears in both the native header and the bundled web page.

## Changes since 0.2.3

Content parity with the current web prototype:

- Six new Coding stages from IDSW 2026 talks: honest cost comparison of test approaches, safer CI spend with measured caveats, authorization as explicit permission rather than ownership alone, deterministic race reproduction with an invariant, cross-app call counting in one user journey, and a stateless-scope mapping exercise that separates position calculation from tickets, sessions and issuance.
- Three new Coding source links (Netflix concurrency-limits, Redis sorted sets, NIST SP 800-38G draft) alongside the two IDSW talk links added earlier.
- The bundled web content matches the live web version, including the corrected claim labels from today's review pass.
- No new permissions, no signing-key change.

## Changes since 0.2.2

Content parity with web prototype 0.2.5:

- Milestone sign-off requests now share a link to a sign-off web page where the reviewer ticks the checklist and records a sign-off code. The code is a hash-derived conversation record, not identity proof; both the app and the sign-off page say so.
- New study-group plan page: write a plan, share the link, and members tick their parts locally.
- New community kit page: starter materials for running a small learning community.
- Career gains the "Place your skill and confidence honestly" stage with an original four-quadrants diagram adapted from an IDSW 2026 lightning talk (attributed on the diagram).
- Sign-off and plan share links always point at the public web base, so they open in a browser when tapped from the offline app.
- No new permissions, no signing-key change.

## Changes since 0.2.1

- The Home skill icon is now a house outline instead of a sparkle.

## Changes in 0.2.1 since 0.2.0

Content parity with the web version, 21 commits bundled:

- Cross-skill references are now hyperlinks that scroll to the exact stage they mean, and #languages resolves to the Languages path.
- Security gains the lost-wallet preparation stage (web-only until now), and the Focus capture Tools line links intodo web.
- Tool links are web-only and verified: menit, tengok and kokok point at their web versions with the limits those pages state; tindak points at the tindak web app.
- The shared milestone note no longer uses safety framing; lost-wallet timing wording softened; small wording fixes in Negotiation and Presenting.
- An automated upgrade check now verifies that an in-place update keeps learner progress, done states and the streak (v0.1.4 to v0.2.0 verified).

## Changes since 0.1.4

Content parity with the web version, 29 web commits bundled:

- Disasters and First aid merge into one Safety and emergencies path, and a new Security basics path (home security, phishing, passwords and 2FA) joins the grid, which stays 5x5.
- Branding and creator grows to a full path: personal branding, consultation and freelancing stages plus the earlier marketing series.
- Career moves reorganizes into one direct path with managing-up, staff engineering and AI-era stages; Coding joins as its own tile with falsehoods-style breaking exercises and a code-review stage; investing basics, corporation concepts and fiscal sponsorship stages land in Money and Network.
- Network gains community-renewal, knowledge handover, paperwork and personal memory-file stages; Home broadens from Tidying with 3D printing and plastic recycling; Self care gains movement stages; Writing gains book interviewing; Cooking gains a food-prep week stage.
- Emergency numbers are jurisdiction-qualified against Kominfo's 112 page: 112 coverage depends on your city or regency, 119 for medical.
- Seven stage cards gain an optional "Tools to try" line linking sibling apps (intodo, menit, kokok, tengok APKs; kapan, nada, denting, daya, bedah web prototypes), each marked optional with the manual route stated. The web footer now links this Android test build.
- Shareable direct skill links via hash routing (#network and friends), with aliases for merged paths.

Every stage keeps its id, so progress and pending sign-off requests carry over. No new permissions, no signing-key change.

Update over 0.1.4 with the same package and release key. Do not uninstall or clear storage, which would remove local progress.

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
