import { test, expect } from '@playwright/test';

test.describe('Event Page Mobile & Tablet Responsive Assertions', () => {
  const viewports = [
    { name: 'Mobile Small', width: 375, height: 812 },
    { name: 'Mobile Android', width: 412, height: 915 },
    { name: 'Tablet Portrait', width: 768, height: 1024 },
    { name: 'Tablet Landscape', width: 1024, height: 768 }
  ];

  const sectionsToVerify = [
    '#event-speakers-section',
    '#event-venue-section',
    '#event-sec3b-findway',
    '#event-sec4-benefits',
    '#event-sec5-comingsoon'
  ];

  for (const vp of viewports) {
    test(`Verify 0 Vertical & Horizontal Overflow on ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('http://localhost:5173/event', { waitUntil: 'networkidle' });

      // 1. Check Horizontal Overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(scrollWidth).toBeLessThanOrEqual(vp.width);

      // 2. Check Vertical Container Height >= Content Height (Zero Vertical Clipping)
      for (const selector of sectionsToVerify) {
        const overflowStatus = await page.evaluate((secSelector) => {
          const sec = document.querySelector(secSelector);
          if (!sec) return { found: false };
          const containerHeight = sec.getBoundingClientRect().height;
          const contentHeight = sec.scrollHeight;
          return {
            found: true,
            containerHeight,
            contentHeight,
            overflow: contentHeight > containerHeight + 5 // 5px tolerance margin
          };
        }, selector);

        if (overflowStatus.found) {
          expect(overflowStatus.overflow).toBe(false);
        }
      }
    });
  }

  test('Verify Desktop Layout (1440px) Unchanged', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('http://localhost:5173/event', { waitUntil: 'networkidle' });

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(1440);
  });
});
