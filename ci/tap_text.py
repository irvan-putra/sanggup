import re
import sys

# Print the center coordinates of the first UI node whose text or
# content-desc matches the target (exact first, then prefix/substring).
target = sys.argv[1]
xml = open(sys.argv[2], encoding="utf-8", errors="replace").read()
best = None
for m in re.finditer(r"<node[^>]*>", xml):
    tag = m.group(0)

    def attr(name):
        a = re.search(name + r'="([^"]*)"', tag)
        return a.group(1) if a else ""

    t, d = attr("text"), attr("content-desc")
    if t == target or d == target:
        best = tag
        break
    if best is None and (t.startswith(target) or d.startswith(target) or target in t or target in d):
        best = tag
if not best:
    sys.exit("no node matching: " + target)
b = re.search(r'bounds="\[(\d+),(\d+)\]\[(\d+),(\d+)\]"', best)
x1, y1, x2, y2 = map(int, b.groups())
print((x1 + x2) // 2, (y1 + y2) // 2)
