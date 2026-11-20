#!/usr/bin/env bash
# In-place upgrade retention proof: install the published OLD APK, seed
# synthetic progress through the real UI, update in place to the published
# NEW APK (same signer), verify the seeded progress survives.
# Evidence (screenshots + UI dumps) lands in upgrade-evidence/.
set -euo pipefail

OLD="$1"
NEW="$2"
mkdir -p upgrade-evidence

shot() { adb exec-out screencap -p > "upgrade-evidence/$1.png"; }
dump() {
  adb shell uiautomator dump /sdcard/uidump.xml >/dev/null
  adb exec-out cat /sdcard/uidump.xml > "upgrade-evidence/$1.xml"
}
tap_text() {
  dump "last-tap"
  read X Y < <(python3 ci/tap_text.py "$1" upgrade-evidence/last-tap.xml)
  adb shell input tap "$X" "$Y"
  sleep 3
}
launch() {
  adb shell am start -W -n com.vanipy.sanggup/.MainActivity >/dev/null
  sleep 12
}

echo "== 1. seed synthetic progress on the OLD published build"
adb install -r "$OLD"
launch
tap_text "Cooking"
tap_text "I did it"
tap_text "I did it"
tap_text "Request sign-off"
shot seeded-cooking
tap_text "all skills"
tap_text "First aid"
tap_text "I did it"
shot seeded-firstaid
dump seeded-firstaid

echo "== 2. in-place update to the NEW published build, same signer"
adb install -r "$NEW"
launch

echo "== 3. Cooking keeps both done stages and the pending request"
tap_text "Cooking"
dump upgraded-cooking
shot upgraded-cooking
python3 ci/upgrade_checks.py cooking upgrade-evidence/upgraded-cooking.xml
tap_text "all skills"

echo "== 4. first-aid progress rides the Safety merge"
tap_text "Safety"
dump upgraded-safety
shot upgraded-safety
python3 ci/upgrade_checks.py safety upgrade-evidence/upgraded-safety.xml
tap_text "all skills"

echo "== 5. pending request still resolves in the teaching view"
tap_text "I'm teaching"
dump upgraded-teacher
shot upgraded-teacher
python3 ci/upgrade_checks.py teacher upgrade-evidence/upgraded-teacher.xml

echo UPGRADE-PROOF-PASS
