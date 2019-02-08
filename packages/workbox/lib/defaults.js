module.exports = {
  // General
  dev: false,
  workboxVersion: '3.6.3-5',
  workboxURL: undefined,
  importScripts: [],
  autoRegister: true,

  // Router
  routerBase: undefined,
  publicPath: undefined,

  // Sw
  swTemplate: undefined,
  swUrl: undefined,
  swScope: undefined,

  // Config
  config: {},
  clientsClaim: true,
  skipWaiting: true,
  offlineAnalytics: false,
  workboxExtensions: [],

  // Precache
  cacheOptions: {
    cacheId: process.env.npm_package_name || 'nuxt',
    directoryIndex: '/'
  },
  cachingExtensions: [],

  offline: true,
  offlinePage: null,
  offlineAssets: [],

  // Runtime Caching
  runtimeCaching: [],
  routingExtensions: [],
  cacheAssets: true
}
