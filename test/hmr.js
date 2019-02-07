// This is a manual playground for HMR Regexes
const chalk = require('chalk')

const HMRRegex = '(?!.*(__webpack_hmr|hot-update))'

const CSNPublicPath = 'https://cdn.com'

const regexes = {
  // Regex for cacheFirst
  cacheFirst: new RegExp(`/_nuxt/${HMRRegex}`),
  cacheFirstCDN: new RegExp(`${CSNPublicPath}/${HMRRegex}`),

  // Regex for networkFist
  networkFirst: new RegExp(`^/${HMRRegex}`)
}

const lists = {
  // URLs should be matched with cacheFirst
  cacheFirst: [
    '/_nuxt/foo.js',
    '/_nuxt/foo/bar.json',
    '/_nuxt/_bar/baz.134.png',
    '/_nuxt/123.jpg?x=123'
  ],

  // CDN URLs
  cdn: [
    `${CSNPublicPath}/_nuxt/123.foo.js`,
    `${CSNPublicPath}/bar/bar/123.js`
  ],

  // URLs should be matched with networkFirst
  networkFirst: [
    '/',
    '/test.txt',
    '/boo',
    '/_foo/bar/baz',
    '/foo/bar/baz/a.txt?y=123'
  ],

  // Webpack HMR URLs
  webpack: [
    '/__webpack_hmr',
    '/__webpack_hmr/',
    '/__webpack_hmr/client/chunk.json',
    '/__webpack_hmr/client/chunk.123.json?a=123',
    '/hot-update.json',
    '/abc123def.hot-update.json',
    '/_nuxt/hot-update.json',
    '/_nuxt/abc123edf.hot-update.json',
    '/_nuxt/foo/hot-hot-update.json',
    '/_nuxt/foo/abc123def.hot-hot-update.json'
  ]
}

const log = (msg, ok) => {
  console.log(chalk[ok ? 'green' : 'red'](`${ok ? '✓' : '✕'} ${msg}`))
}

const allShouldMatch = (regexName, listName) => lists[listName].forEach(item => {
  log(`${regexName} should match ${item}`, regexes[regexName].test(item))
})

const allShouldNotMatch = (regexName, listName) => lists[listName].forEach(item => {
  log(`${regexName} should not match ${item}`, !regexes[regexName].test(item))
})

allShouldMatch('cacheFirst', 'cacheFirst')
allShouldMatch('cacheFirstCDN', 'cdn')
allShouldNotMatch('cacheFirst', 'webpack')

allShouldMatch('networkFirst', 'networkFirst')
allShouldNotMatch('networkFirst', 'webpack')
