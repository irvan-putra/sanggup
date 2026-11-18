# Android presentation correction

Prepared for the approved0.1.1/code2 test release. Publication requires the final checks and signed workflow to succeed.

- Launcher label is lowercase `sanggup`, matching the app family. In-app Sang identity and web title are unchanged.
- Legacy, adaptive and themed launcher resources use the family version strip: full width, starting at 76% of the visible face, centred numbers at 88%, DejaVu Sans Bold at 11.5% of the face. These match the Tuju generator. Existing Sang head/eye/crest/neck SVG paths and amber background are reused. The adaptive 72dp face sits inside the 108dp layer with 18dp overscan, so both picture and strip match the legacy icon. Themed numbers are cut out of the strip for contrast.
- Rebuild with `pip install Pillow==12.3.0 CairoSVG==2.8.2` and `python android/tools/badge_icon.py`. Version comes from Android build configuration. CI checks deterministic resources; do not hand-edit badge PNGs.
- Widget targets 2 columns by 1 row on Android12+, with 110x48dp fallback/minimum for older launchers. Grid dimensions and padding vary by launcher, so this is a target, not proof of exact placement on every device. Compact horizontal layout retains all six Sang frames, live local streak count, and tap-to-open. A taller layout remains available when resized to at least110dp height. Android12 uses responsive RemoteViews; earlier versions choose on size changes.
- The user reported the existing0.1.0 widget animating on their phone. This is user-reported evidence, not an inspected recording or a cross-launcher reliability test. The new compact layout still needs its own runtime and phone sizing checks.

Official sizing reference: https://developer.android.com/develop/ui/views/appwidgets/layouts

A future installable correction needs a new approved signed release with incremented version/code, same package and signer. Do not uninstall or clear storage: progress stays local. No permission, account, learning-path, streak-day or signing behavior is changed here.

The exact DejaVu font file is vendored with its license in `tools/fonts/` and its SHA-256 is checked. This prevents runner distribution font differences from changing the badge.
