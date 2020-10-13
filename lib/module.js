const { resolve } = require('path')
const serveStatic = require('serve-static')

module.exports = async function nuxtPWA (moduleOptions) {
  const { nuxt } = this
  const moduleContainer = this // TODO: remove dependency when module-utils

  const isBuild = nuxt.options._build
  const isGenerate = nuxt.options.target === 'static' && !nuxt.options.dev
  const isRuntime = !isBuild && !isGenerate

  if (isRuntime) {
    // Load meta.json for SPA renderer
    require('./meta/module.runtime')(nuxt)
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
    await require(`./${name}/module.js`)(nuxt, pwa, moduleContainer)
  }

  // Serve dist from disk
  if (nuxt.options.dev) {
    const clientDir = resolve(nuxt.options.buildDir, 'dist/client')
    nuxt.options.serverMiddleware.push({
      path: nuxt.options.build.publicPath,
      handler: serveStatic(clientDir)
    })
  }
}

module.exports.meta = require('../package.json')
