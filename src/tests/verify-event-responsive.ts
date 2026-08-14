import { chromium } from 'playwright';

async function runVerification() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const viewports = [
    { name: 'Mobile Small', width: 375, height: 812 },
    { name: 'Mobile Android', width: 412, height: 915 },
    { name: 'Tablet Portrait', width: 768, height: 1024 },
    { name: 'Tablet Landscape', width: 1024, height: 768 },
    { name: 'Desktop Locked', width: 1440, height: 900 }
  ];

  const sectionsToVerify = [
    '#event-speakers-section',
    '#event-venue-section',
    '#event-sec3b-findway',
    '#event-sec4-benefits',
    '#event-sec5-comingsoon'
  ];

  let hasError = false;

  for (const vp of viewports) {
    console.log(`\n--- Testing Viewport: ${vp.name} (${vp.width}x${vp.height}px) ---`);
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173/event', { waitUntil: 'networkidle' });

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const hasHorizontalOverflow = scrollWidth > vp.width;
    console.log(`ScrollWidth: ${scrollWidth}px / Max: ${vp.width}px -> Horizontal Overflow: ${hasHorizontalOverflow ? 'FAIL ❌' : 'PASS ✅'}`);
    if (hasHorizontalOverflow) hasError = true;

    if (vp.width <= 1024) {
      for (const selector of sectionsToVerify) {
        const res = await page.evaluate((secSelector) => {
          const sec = document.querySelector(secSelector);
          if (!sec) return { found: false };
          const containerHeight = sec.getBoundingClientRect().height;
          const contentHeight = sec.scrollHeight;
          return {
            found: true,
            containerHeight,
            contentHeight,
            overflow: contentHeight > containerHeight + 10
          };
        }, selector);

        if (res.found) {
          console.log(`  ${selector}: Container ${Math.round(res.containerHeight)}px vs Content ${Math.round(res.contentHeight)}px -> ${res.overflow ? 'FAIL (Vertical Overflow) ❌' : 'PASS ✅'}`);
          if (res.overflow) hasError = true;
        }
      }
    }
  }

  await browser.close();
  if (hasError) {
    console.error('\n❌ Verification Failed with Overflows');
    process.exit(1);
  } else {
    console.log('\n✅ All Mobile, Tablet & Desktop Assertions Passed Cleanly!');
  }
}

runVerification().catch(err => {
  console.error(err);
  process.exit(1);
});
