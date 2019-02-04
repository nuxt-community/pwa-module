module.exports = {
  dev: false,

  workboxVersion: '3.6.3-5',
  workboxURL: undefined,
  workboxConfig: undefined,

  importScripts: [],

  offline: true,
  offlinePage: null,
  offlineAssets: [],

  cachingExtensions: [],
  routingExtensions: [],

  clientsClaim: true,
  skipWaiting: true,

  runtimeCaching: [],

  cacheAssets: true,

  autoRegister: true,

  routerBase: undefined,
  publicPath: undefined,

  swTemplate: undefined,
  swSrc: undefined,
  swUrl: undefined,
  swScope: undefined,

  cacheOptions: {
    cacheId: process.env.npm_package_name || 'nuxt',
    directoryIndex: '/'
  }
}
