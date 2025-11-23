// Usage:
// 1) npm install puppeteer --save-dev
// 2) node scripts/convert-screenshots.js
// This script loads the SVG mockups and renders PNG screenshots into
// `public/design/screenshots/desktop.png` and `public/design/screenshots/mobile.png`.

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

async function render() {
  const projectRoot = process.cwd();
  const publicDir = path.join(projectRoot, "public", "design");
  const outDir = path.join(publicDir, "screenshots");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const desktopSvg = path.join(publicDir, "mockup-classboard.svg");
  const mobileSvg = path.join(publicDir, "mockup-classboard-mobile.svg");

  if (!fs.existsSync(desktopSvg) || !fs.existsSync(mobileSvg)) {
    console.error("Required SVGs not found in public/design:");
    console.error("  ", desktopSvg);
    console.error("  ", mobileSvg);
    process.exit(1);
  }

  const browser = await puppeteer.launch();
  try {
    // Desktop (wide) screenshot
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 2 });
    await page.goto("file://" + desktopSvg);
    // Wait a tick for external fonts/styles to settle
    await page.waitForTimeout(200);
    const desktopOut = path.join(outDir, "desktop.png");
    await page.screenshot({
      path: desktopOut,
      clip: { x: 0, y: 0, width: 1400, height: 900 },
    });
    console.log("Wrote", desktopOut);

    // Mobile screenshot
    const page2 = await browser.newPage();
    await page2.setViewport({ width: 360, height: 800, deviceScaleFactor: 2 });
    await page2.goto("file://" + mobileSvg);
    await page2.waitForTimeout(200);
    const mobileOut = path.join(outDir, "mobile.png");
    await page2.screenshot({
      path: mobileOut,
      clip: { x: 0, y: 0, width: 360, height: 800 },
    });
    console.log("Wrote", mobileOut);

    await page.close();
    await page2.close();
  } finally {
    await browser.close();
  }
}

render().catch((err) => {
  console.error(err);
  process.exit(1);
});
