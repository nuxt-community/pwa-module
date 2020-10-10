module.exports = async function nuxtPWA (moduleOptions) {
  const { nuxt } = this

  if (!nuxt.options._build) {
    // Load meta.json for SPA renderer
    require('./meta/module.runtime').call(this)
    return
  }

  const modules = ['icon', 'manifest', 'meta', 'workbox']

  // Shared options context
  nuxt.options.pwa = { ...(nuxt.options.pwa || {}), ...(moduleOptions || {}) }
  const { pwa } = nuxt.options

  // Normalize options
  for (const name of modules) {
    // Skip disabled modules
    if (pwa[name] === false || nuxt.options[name] === false) {
      continue
    }
    // Ensure options are an object
    if (pwa[name] === undefined) {
      pwa[name] = {}
    }
    // Backward compatibility for top-level options
    if (nuxt.options[name] !== undefined) {
      pwa[name] = { ...nuxt.options[name], ...pwa[name] }
    }
  }

  // Execute modules in sequence
  for (const name of modules) {
    if (pwa[name] === false) {
      continue
    }
    await require(`./${name}/module.js`).call(this, pwa)
  }
}

module.exports.meta = require('../package.json')
