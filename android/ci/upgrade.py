#!/usr/bin/env python3
"""Signed update-in-place test with synthetic practice progress, via visible UI."""
import subprocess,time,re,xml.etree.ElementTree as ET,os
PKG='com.vanipy.sanggup';os.makedirs('upgrade-evidence',exist_ok=True)
def adb(*args):return subprocess.check_output(['adb',*args],text=True)
def shot(name):
 with open('upgrade-evidence/'+name+'.png','wb')as f:f.write(subprocess.check_output(['adb','exec-out','screencap','-p']))
def dump(name):
 adb('shell','uiautomator','dump','/sdcard/ui.xml');s=adb('exec-out','cat','/sdcard/ui.xml');open('upgrade-evidence/'+name+'.xml','w').write(s);return ET.fromstring(s)
def tap(pattern,name):
 for attempt in range(12):
  root=dump(name)
  for n in root.iter('node'):
   if re.search(pattern,(n.get('text','')+' '+n.get('content-desc','')),re.I):
    b=list(map(int,re.findall(r'\d+',n.get('bounds',''))))
    if len(b)==4 and b[2]>b[0]and b[3]>b[1]:adb('shell','input','tap',str((b[0]+b[2])//2),str((b[1]+b[3])//2));time.sleep(2);return
  time.sleep(1)
 shot(name+'-missing');raise AssertionError('UI target missing: '+pattern)
def text(root):return ' '.join(n.get('text','')+' '+n.get('content-desc','')for n in root.iter('node'))
adb('install','-r','old.apk');adb('logcat','-c');adb('shell','am','start','-W','-n',PKG+'/.MainActivity');time.sleep(15);shot('before-practice')
tap('^Cooking','open-cooking');shot('practice-track');tap('^I did it','log-practice');shot('practice-logged')
# Native header is refreshed when the app resumes.
adb('shell','am','force-stop',PKG);adb('shell','am','start','-W','-n',PKG+'/.MainActivity');time.sleep(5)
before=text(dump('before-upgrade'));shot('before-upgrade');assert '1 day streak'in before,before
adb('install','-r','new.apk');adb('shell','am','force-stop',PKG);adb('shell','am','start','-W','-n',PKG+'/.MainActivity');time.sleep(8)
after=text(dump('after-upgrade'));shot('after-upgrade');assert '1 day streak'in after,after
assert 'versionName=0.1.1'in adb('shell','dumpsys','package',PKG)
crash=adb('logcat','-d','-b','crash');open('upgrade-evidence/crash.txt','w').write(crash);assert PKG not in crash
print('PASS: signed0.1.0 to0.1.1 retained synthetic1-day native practice streak, no uninstall/data clear')
