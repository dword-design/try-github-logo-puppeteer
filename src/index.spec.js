import puppeteer from '@dword-design/puppeteer'
import download from 'download'
import fileUrl from 'file-url'
import { readFile, remove } from 'fs-extra'

console.log(fileUrl)
console.log(puppeteer)
console.log(readFile)
console.log(remove)

export default {
  async valid() {
    /* const browser = await puppeteer.launch()

    const page = await browser.newPage()
    try { */
    await download(
      'https://github.blog/wp-content/uploads/2019/01/cropped-github-favicon-512.png?fit=32%2C32',
      'src',
      { filename: 'file.png' }
    )
    try {
      /* page.on('request', request => {
      console.log(request.url())
      console.log(request.headers())
    })
    await page.goto(
      'https://github.blog/wp-content/uploads/2019/01/cropped-github-favicon-512.png?fit=32%2C32'
    ) */
      // await page.goto(fileUrl(require.resolve('./index.html')))
      // expect(await page.screenshot()).toMatchImageSnapshot(this)
      expect(await readFile('src/file.png')).toMatchImageSnapshot(this)
    } finally {
      await remove('src/file.png')
    }
    /* } finally {
      await page.close()
      await browser.close()
    } */
  },
}
