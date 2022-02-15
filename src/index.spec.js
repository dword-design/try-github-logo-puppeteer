import puppeteer from '@dword-design/puppeteer'
import fileUrl from 'file-url'

export default {
  async valid() {
    const browser = await puppeteer.launch()

    const page = await browser.newPage()
    try {
      await page.goto(fileUrl(require.resolve('./index.html')))
      expect(await page.screenshot()).toMatchImageSnapshot(this)
    } finally {
      await page.close()
      await browser.close()
    }
  },
}
