
import json, sys
from playwright.sync_api import sync_playwright
a = json.loads(sys.argv[1])
target = a["target"]
if not target.startswith(("http://", "https://", "file://")):
    target = "file:///work/" + target.lstrip("/")
with sync_playwright() as p:
    b = p.chromium.launch(args=["--no-sandbox"])
    pg = b.new_page(viewport={"width": a["width"], "height": a["height"]}, device_scale_factor=1)
    pg.goto(target, wait_until="networkidle", timeout=45000)
    pg.wait_for_timeout(600)
    pg.screenshot(path="/work/.screenshot.png", full_page=a["full_page"])
    print(json.dumps({"title": pg.title(), "url": pg.url}))
    b.close()
