#!/usr/bin/env bash
# Runs inside the emulator. Grants widget bind to the app, runs the hosted-widget
# test, then pulls the frames it saved.
set -u
cd "$(dirname "$0")/.."
gradle --no-daemon assembleDebug assembleDebugAndroidTest || exit 1
adb install -r app/build/outputs/apk/debug/app-debug.apk || exit 1
adb logcat -c
gradle --no-daemon connectedDebugAndroidTest -x assembleDebug 2>&1 | tail -40
RC=${PIPESTATUS[0]}
mkdir -p ../emu-out
adb logcat -d -s SANGGUP > ../emu-out/logcat-sanggup.txt
for f in widget_0 widget_3 widget_6; do adb exec-out run-as com.vanipy.sanggup cat files/$f.png > ../emu-out/$f.png; done
adb exec-out screencap -p > ../emu-out/screen.png
cat ../emu-out/logcat-sanggup.txt
exit $RC
