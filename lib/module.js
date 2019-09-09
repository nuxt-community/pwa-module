module.exports = async function nuxtPWA (moduleOptions) {
  const modules = ['icon', 'manifest', 'meta', 'workbox']

  // Shared options context
  const pwa = { ...this.options.pwa, ...moduleOptions }

  // Normalize options
  for (const name of modules) {
    // Skip disabled modules
    if (pwa[name] === false) {
      continue
    }
    // Ensure options are an object
    if (pwa[name] === undefined) {
      pwa[name] = {}
    }
    // Backward compatibility for top-level options
    if (this.options[name] !== undefined) {
      pwa[name] = { ...this.options[name], ...pwa[name] }
    }
  }

  // Execute modules in sequence
  for (const name of modules) {
    if (pwa[name] === false) {
      continue
    }
    const moduleFn = require(`./${name}/module.js`)
    await moduleFn.call(this, pwa)
  }
}

module.exports.meta = require('../package.json')
