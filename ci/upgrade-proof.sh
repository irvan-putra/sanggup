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
SW=$(adb shell wm size | grep -o '[0-9]*x[0-9]*' | head -1)
W=${SW%x*}; H=${SW#*x}; CX=$((W / 2)); YHI=$((H * 3 / 4)); YLO=$((H / 4))
echo "screen: ${W}x${H}"
scroll_down() { adb shell input swipe "$CX" "$YHI" "$CX" "$YLO"; sleep 2; }
scroll_top() { for i in 1 2 3 4 5 6; do adb shell input swipe "$CX" "$YLO" "$CX" "$YHI"; sleep 1; done; }

# WebView nodes that are off-screen report bounds [0,0][0,0]; scroll until the
# target has real bounds, then tap its center.
tap_text() {
  local tries=0
  while [ "$tries" -lt 8 ]; do
    dump "last-tap"
    if python3 ci/tap_text.py "$1" upgrade-evidence/last-tap.xml > /tmp/tapxy; then
      read X Y < /tmp/tapxy
      if [ "$X" != "0" ] || [ "$Y" != "0" ]; then
        adb shell input tap "$X" "$Y"
        sleep 3
        return 0
      fi
    fi
    scroll_down
    tries=$((tries + 1))
  done
  scroll_top
  dump "last-tap"
  # tap_text.py exits nonzero when the text is absent; under set -e that
  # kills the script outright, and under `cmd || fallback` it leaves tapxy
  # empty so the bare zero-check below misfires and taps stale coordinates.
  # Guard the lookup, then fail with a normal return so callers can fall
  # back (set -e still aborts unguarded calls).
  if python3 ci/tap_text.py "$1" upgrade-evidence/last-tap.xml > /tmp/tapxy; then
    read X Y < /tmp/tapxy
    if [ "$X" != "0" ] || [ "$Y" != "0" ]; then
      adb shell input tap "$X" "$Y"
      sleep 3
      return 0
    fi
  fi
  echo "could not tap (not found after scrolls): $1" >&2
  return 1
}
launch() {
  adb shell am start -W -n com.vanipy.sanggup/.MainActivity >/dev/null
  sleep 12
}
node_present() {
  dump "probe"
  python3 ci/tap_text.py "$1" upgrade-evidence/probe.xml > /dev/null 2>&1
}

# scroll until the target text has real bounds, without tapping; used to
# bring retained-progress evidence into the viewport for screenshots
focus_text() {
  local tries=0
  while [ "$tries" -lt 8 ]; do
    dump "last-tap"
    if python3 ci/tap_text.py "$1" upgrade-evidence/last-tap.xml > /tmp/tapxy; then
      read X Y < /tmp/tapxy
      if [ "$X" != "0" ] || [ "$Y" != "0" ]; then return 0; fi
    fi
    scroll_down
    tries=$((tries + 1))
  done
  return 1
}

echo "== 1. seed synthetic progress on the OLD published build"
adb install -r "$OLD"
launch
tap_text "Cooking"
# finish every open practice stage until the milestone offers sign-off
for i in 1 2 3 4 5; do
  if node_present "Request sign-off"; then break; fi
  tap_text "I did it"
done
tap_text "Request sign-off"
shot seeded-cooking
scroll_top
tap_text "all skills"
# the disaster track's tile was renamed between releases: "First aid" on
# v0.1.x, "Safety" from v0.2.0 on; the stage ids are unchanged, so seeding
# through either label lands on the same stages
tap_text "First aid" || tap_text "Safety"
tap_text "I did it"
shot seeded-firstaid
dump seeded-firstaid

echo "== 2. in-place update to the NEW published build, same signer"
adb install -r "$NEW"
launch

echo "== 3. Cooking keeps the done stages and the pending request"
tap_text "Cooking"
dump upgraded-cooking
shot upgraded-cooking
python3 ci/upgrade_checks.py cooking upgrade-evidence/upgraded-cooking.xml
scroll_top
focus_text "done" && shot upgraded-cooking-done
scroll_top
focus_text "Show this code to your instructor" && shot upgraded-cooking-request
scroll_top
tap_text "all skills"

echo "== 4. first-aid progress rides the Safety merge"
tap_text "Safety"
dump upgraded-safety
shot upgraded-safety
python3 ci/upgrade_checks.py safety upgrade-evidence/upgraded-safety.xml
scroll_top
focus_text "done" && shot upgraded-safety-done
scroll_top
tap_text "all skills"

echo "== 5. pending request still resolves in the teaching view"
tap_text "I'm teaching"
dump upgraded-teacher
shot upgraded-teacher
python3 ci/upgrade_checks.py teacher upgrade-evidence/upgraded-teacher.xml
scroll_top
focus_text "Milestone: rice and a stir-fry" && shot upgraded-teacher-request

echo UPGRADE-PROOF-PASS
