module.exports = async function nuxtPWA (options) {
  const modules = ['icon', 'manifest', 'meta', 'workbox']

  const pwaOptions = { ...this.options.pwa, ...options }

  for (const name of modules) {
    if (pwaOptions[name] === false || this.options[name] === false) {
      continue
    }
    const moduleFn = require(`./${name}/module.js`)
    const moduleOptions = { ...this.options[name], ...pwaOptions[name] }
    await moduleFn.call(this, moduleOptions)
  }
}

module.exports.meta = require('../package.json')
