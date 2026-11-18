#!/usr/bin/env bash
# Runs inside the emulator. Grants widget bind to the app, runs the hosted-widget
# test, then pulls the frames it saved.
set -u
cd "$(dirname "$0")/.."
gradle --no-daemon assembleDebug assembleDebugAndroidTest || exit 1
adb install -r app/build/outputs/apk/debug/app-debug.apk || exit 1
adb logcat -c
adb install -r app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk || exit 1
adb shell am instrument -w com.vanipy.sanggup.test/androidx.test.runner.AndroidJUnitRunner | tee /tmp/instrumentation.txt
RC=0
grep -q 'OK (1 test)' /tmp/instrumentation.txt || RC=1
mkdir -p ../emu-out
adb logcat -d -s SANGGUP > ../emu-out/logcat-sanggup.txt
for f in widget_0 widget_3 widget_6 widget_minimum widget_tall app_ready host_0 host_3 host_6; do adb exec-out run-as com.vanipy.sanggup cat files/$f.png > ../emu-out/$f.png; done
adb exec-out screencap -p > ../emu-out/screen.png
adb shell am start -W -n com.vanipy.sanggup/.MainActivity
sleep 3
adb exec-out screencap -p > ../emu-out/app.png
cat ../emu-out/logcat-sanggup.txt
exit $RC
