module.exports = async function nuxtPWA (options) {
  const modules = ['icon', 'manifest', 'meta', 'workbox']
  for (const name of modules) {
    if (options[name] === false || this.options[name] === false) {
      continue
    }
    const moduleFn = require(`./${name}/module.js`)
    const moduleOptions = { ...this.options[name], ...options[name] }
    await moduleFn.call(this, moduleOptions)
  }
}

module.exports.meta = require('../package.json')
