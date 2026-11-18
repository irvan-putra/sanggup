#!/usr/bin/env python3
"""Rebuild sanggup launcher resources with the com.vanipy family strip.

Pillow12.3.0, CairoSVG2.8.2 and DejaVuSans-Bold are pinned. The source
head crop is icon.svg, not a new mascot drawing. Android foreground face
is72dp centred in108dp. Version comes from the Android build config.
"""
from pathlib import Path
import re,io,hashlib
import PIL,cairosvg
from PIL import Image,ImageDraw,ImageFont,ImageChops
ROOT=Path(__file__).resolve().parents[2]
RES=ROOT/'android/app/src/main/res'
FONT=str(ROOT/'tools/fonts/DejaVuSans-Bold.ttf')
assert PIL.__version__=='12.3.0'
assert cairosvg.__version__=='2.8.2'
assert hashlib.sha256(Path(FONT).read_bytes()).hexdigest()=='d1c3ff99f1e1ce1827a33efd4dad81f40babda06bff9e43bd7591c86662a287b'
version=re.search(r'versionName = "([0-9.]+)"',(ROOT/'android/app/build.gradle.kts').read_text())[1]
S=768;BG='#F5C96B';STRIP='#241A33'
source=(ROOT/'icon.svg').read_text()
# Reuse only the existing head, neck and eye/crest geometry. The web icon's
# wider viewport also contains stray body fragments, not part of the head.
defs=source[source.index('<defs>'):source.index('</defs>')+7]
neck=source[source.index('  <!-- neck -->'):source.index('  <!-- near-side legs -->')]
head_parts=source[source.index('  <!-- head:'):source.index('  <!-- dorsal crest row')]
svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="72 176 90 90">'+defs+neck+head_parts+'</svg>'
head=Image.open(io.BytesIO(cairosvg.svg2png(bytestring=svg.encode(),output_width=S,output_height=S))).convert('RGBA')
head=head.crop(head.getbbox());head.thumbnail((int(S*.70),int(S*.64)),Image.Resampling.LANCZOS)
art=Image.new('RGBA',(S,S));art.alpha_composite(head,((S-head.width)//2,int(S*.42)-head.height//2))
face=Image.new('RGBA',(S,S),BG);face.alpha_composite(art)
ImageDraw.Draw(face).rectangle([0,int(S*.76),S,S],fill=STRIP)
text=Image.new('RGBA',(S,S));ImageDraw.Draw(text).text((S/2,S*.88),version,font=ImageFont.truetype(FONT,int(S*.115)),fill='white',anchor='mm');face.alpha_composite(text)
mask=Image.new('L',(S,S));ImageDraw.Draw(mask).rounded_rectangle([0,0,S,S],radius=S*.2,fill=255)
legacy=face.copy();legacy.putalpha(mask)
for density,size in {'mdpi':48,'hdpi':72,'xhdpi':96,'xxhdpi':144,'xxxhdpi':192}.items():
 p=RES/f'mipmap-{density}/ic_launcher.png';p.parent.mkdir(exist_ok=True);legacy.resize((size,size),Image.Resampling.LANCZOS).save(p,optimize=True)
# Remove superseded duplicate names in nodpi. Frame animation assets stay intact.
for p in [RES/'mipmap-nodpi/ic_launcher.png',RES/'drawable-nodpi/ic_launcher_foreground.png',RES/'drawable-nodpi/ic_launcher_monochrome.png']:
 if p.exists():p.unlink()
T=864;F=576;I=144
fg=Image.new('RGBA',(T,T));picture=art.resize((F,F),Image.Resampling.LANCZOS);fg.alpha_composite(picture,(I,I))
y=I+int(F*.76);ImageDraw.Draw(fg).rectangle([0,y,T,T],fill=STRIP)
txt=Image.new('RGBA',(T,T));ImageDraw.Draw(txt).text((T/2,I+F*.88),version,font=ImageFont.truetype(FONT,int(F*.115)),fill='white',anchor='mm');fg.alpha_composite(txt)
a=Image.new('L',(T,T));a.paste(picture.getchannel('A'),(I,I));ImageDraw.Draw(a).rectangle([0,y,T,T],fill=255);a=ImageChops.subtract(a,txt.getchannel('A'));mono=Image.new('RGBA',(T,T),'white');mono.putalpha(a)
for name,img in [('ic_launcher_foreground.png',fg),('ic_launcher_monochrome.png',mono)]:
 p=RES/'drawable-xxxhdpi'/name;p.parent.mkdir(exist_ok=True);img.resize((432,432),Image.Resampling.LANCZOS).save(p,optimize=True)
print('Generated sanggup',version)
