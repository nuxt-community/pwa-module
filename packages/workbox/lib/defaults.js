module.exports = {
  // General
  workboxVersion: '3.6.3-5',
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

  // Sw
  swTemplate: undefined,
  swUrl: undefined,
  swScope: undefined,

  // Router
  routerBase: undefined,
  publicPath: undefined
}
