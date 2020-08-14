module.exports = {
  // General
  workboxVersion: require('workbox-cdn/package.json').version,
  workboxURL: undefined,
  importScripts: [],
  autoRegister: true,
  enabled: undefined,

  // Config
  config: {},
  clientsClaim: true,
  skipWaiting: true,
  offlineAnalytics: false,
  workboxExtensions: [],

  // Precache
  preCaching: [],
  cacheOptions: {
    cacheId: undefined,
    directoryIndex: '/',
    revision: undefined
  },
  cachingExtensions: [],
  cleanupOutdatedCaches: true,

  // Offline
  offline: true,
  offlineStrategy: 'NetworkFirst',
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
  swDest: undefined,

  // Router
  routerBase: undefined,
  publicPath: undefined
}
