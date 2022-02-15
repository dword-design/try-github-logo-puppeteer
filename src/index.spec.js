import puppeteer from '@dword-design/puppeteer'
import download from 'download'
import fileUrl from 'file-url'

export default {
  async valid() {
    const browser = await puppeteer.launch()

    const page = await browser.newPage()
    try {
      await download(
        'https://github.blog/wp-content/uploads/2019/01/cropped-github-favicon-512.png?fit=32%2C32',
        'src',
        { filename: 'file.png' }
      )
      await page.goto(fileUrl(require.resolve('./index.html')))
      expect(await page.screenshot()).toMatchImageSnapshot(this)
    } finally {
      await page.close()
      await browser.close()
    }
  },
}
