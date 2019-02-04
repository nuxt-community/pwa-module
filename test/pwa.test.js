const klawSync = require('klaw-sync')
const path = require('path')
const fs = require('fs-extra')
const { Nuxt, Builder, Generator } = require('nuxt-edge')

jest.setTimeout(60000)

const getRelativePath = fileObj => path.relative(__dirname, fileObj.path)

const noJS = item => !/\.js/.test(item)

describe('pwa', () => {
  let nuxt

  test(
    'build and generate', async () => {
      nuxt = new Nuxt(require('./fixture/nuxt.config'))
      await nuxt.ready()

      const builder = new Builder(nuxt)
      await builder.build()

      const generator = new Generator(nuxt)
      await generator.generate({ build: false })
    })

  test('build files (.nuxt)', async () => {
    const buildFiles = klawSync(nuxt.options.buildDir).map(getRelativePath)

    expect(buildFiles.filter(noJS)).toMatchSnapshot()
  })

  test('generate files (dist)', async () => {
    const generateFiles = klawSync(nuxt.options.generate.dir).map(getRelativePath)

    expect(generateFiles.filter(noJS)).toMatchSnapshot()
  })

  test('accessible icons', async () => {
    const { html } = await nuxt.renderRoute('/icons')
    expect(html).toContain('/_nuxt/icons/icon_512.9mgd2ZDMcQu.png')
  })

  test('sw.js', async () => {
    const swContents = await fs.readFile(path.resolve(nuxt.options.generate.dir, 'sw.js'), 'utf-8')

    expect(swContents).toMatchSnapshot()
  })
})
