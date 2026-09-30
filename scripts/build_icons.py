from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'


def make_icon(size, filename):
    s = size / 512
    image = Image.new('RGB', (size, size), '#142b47')
    draw = ImageDraw.Draw(image)
    def box(coords):
        return tuple(round(v * s) for v in coords)
    draw.rounded_rectangle(box((84, 170, 428, 344)), radius=round(23*s), fill='white')
    draw.rounded_rectangle(box((84, 170, 162, 344)), radius=round(21*s), fill='#1769aa')
    draw.rectangle(box((141, 171, 163, 343)), fill='#1769aa')
    draw.ellipse(box((109, 215, 139, 245)), fill='#f9dc54')
    draw.rounded_rectangle(box((109, 268, 138, 277)), radius=max(1, round(4*s)), fill='#d5e8fd')
    font = ImageFont.truetype(FONT, round(108*s))
    draw.text((round(291*s), round(260*s)), 'DE', font=font, fill='#142b47', anchor='mm')
    image.save(ROOT / filename, optimize=True)

for size, filename in [(192, 'icon-192.png'), (512, 'icon-512.png'), (512, 'icon-512-maskable.png'), (180, 'apple-touch-icon.png')]:
    make_icon(size, filename)
