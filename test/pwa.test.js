import path from 'path'
import { setupTest, getNuxt } from '@nuxt/test-utils'
import klawSync from 'klaw-sync'
import fs from 'fs-extra'

const getRelativePath = fileObj => path.relative(__dirname, fileObj.path)
const noJS = item => !/\.js/.test(item)

console.warn = jest.fn() // eslint-disable-line no-console

describe('pwa', () => {
  setupTest({
    testDir: __dirname,
    fixture: 'fixture',
    configFile: 'nuxt.config.ts',
    build: true,
    generate: true,
    config: {}
  })

  test('workbox dev warning', () => {
    expect(console.warn).toHaveBeenCalledWith('Workbox is running in development mode') // eslint-disable-line no-console
  })

  test('generate files (dist)', () => {
    const nuxt = getNuxt()
    const generateFiles = klawSync(nuxt.options.generate.dir).map(getRelativePath)

    expect(generateFiles.filter(noJS)).toMatchSnapshot()
  })

  test('accessible icons', async () => {
    const nuxt = getNuxt()
    const { html } = await nuxt.renderRoute('/')
    expect(html).toContain('/_nuxt/icons/icon_512x512.b8f3a1.png')
  })

  test('icons purpose', () => {
    const nuxt = getNuxt()
    const assetDir = path.join(nuxt.options.generate.dir, '_nuxt')
    const manifestFileName = fs.readdirSync(assetDir).find(item => item.match(/^manifest./i))
    const manifestContent = JSON.parse(fs.readFileSync(path.join(assetDir, manifestFileName.split('?')[0])))
    expect(manifestContent.icons).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          purpose: expect.stringMatching(/( ?(any|maskable|badge))+/)
        })
      ])
    )
  })

  test('sw.js', async () => {
    const nuxt = getNuxt()
    const swContents = await fs.readFile(path.resolve(nuxt.options.generate.dir, 'sw.js'), 'utf-8')

    expect(swContents.replace(/@[^/]*/, '')).toMatchSnapshot()
  })

  test('manifest.json', async () => {
    const nuxt = getNuxt()
    const manifestContents = await fs.readFile(path.resolve(nuxt.options.generate.dir, '_nuxt/manifest_test.webmanifest'), 'utf-8')

    expect(manifestContents).toMatchSnapshot()
  })
})
