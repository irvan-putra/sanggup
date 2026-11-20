import re
import sys

mode, path = sys.argv[1], sys.argv[2]
xml = open(path, encoding="utf-8", errors="replace").read()

if mode == "cooking":
    assert xml.count('text="done"') >= 2, "done labels lost after upgrade"
    assert "Show this code to your instructor" in xml, "pending sign-off request lost after upgrade"
elif mode == "safety":
    assert "Why training matters" in xml, "merged first-aid stage missing"
    assert xml.count('text="done"') >= 1, "first-aid done state lost in merge"
elif mode == "teacher":
    assert "Milestone: rice and a stir-fry" in xml, "pending request title missing in teacher view"
    assert re.search(r"[A-Z2-9]{6}", xml), "sign-off code missing in teacher view"
else:
    sys.exit("unknown check: " + mode)
print(mode + " check passed")
