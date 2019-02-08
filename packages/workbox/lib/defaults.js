module.exports = {
  // General
  workboxVersion: '4.0.0-rc.0',
  workboxURL: undefined,
  importScripts: [],
  autoRegister: true,
  dev: false,

  // Config
  config: {},
  clientsClaim: true,
  skipWaiting: true,
  offlineAnalytics: false,
  workboxExtensions: [],

  // Precache
  preCaching: [],
  cacheOptions: {
    cacheId: process.env.npm_package_name || 'nuxt',
    directoryIndex: '/',
    revision: undefined
  },
  cachingExtensions: [],

  // Offline
  offline: true,
  offlinePage: null,
  offlineAssets: [],

  // Runtime Caching
  runtimeCaching: [],
  routingExtensions: [],
  cacheAssets: true,
  assetsURLPattern: undefined,
  pagesURLPattern: undefined,

  // Sw
  swTemplate: undefined,
  swUrl: undefined,
  swScope: undefined,

  // Router
  routerBase: undefined,
  publicPath: undefined
}
