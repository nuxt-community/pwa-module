jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000
process.env.PORT = process.env.PORT || 5060
process.env.NODE_ENV = 'production'

const { Nuxt, Builder } = require('nuxt-edge')

const url = path => `http://localhost:${process.env.PORT}${path}`

describe('pwa', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = new Nuxt(require('./fixture/nuxt.config'))
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('init', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    const headers = window.document.head.innerHTML
    expect(headers).toMatchSnapshot()
  })
})
