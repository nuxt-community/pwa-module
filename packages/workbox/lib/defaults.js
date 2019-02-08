module.exports = {
  workboxVersion: '3.6.3-5',
  workboxURL: undefined,

  config: {},

  dev: false,

  importScripts: [],

  offline: true,
  offlinePage: null,
  offlineAssets: [],

  offlineAnalytics: false,

  cachingExtensions: [],
  routingExtensions: [],
  workboxExtensions: [],

  clientsClaim: true,
  skipWaiting: true,

  runtimeCaching: [],

  cacheAssets: true,

  autoRegister: true,

  routerBase: undefined,
  publicPath: undefined,

  swTemplate: undefined,
  swUrl: undefined,
  swScope: undefined,

  cacheOptions: {
    cacheId: process.env.npm_package_name || 'nuxt',
    directoryIndex: '/'
  }
}
