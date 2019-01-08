module.exports = {
  importScripts: [],
  workboxConfig: undefined,

  offline: true,
  offlinePage: null,
  offlineAssets: [],

  cachingExtensions: [],
  routingExtensions: [],

  clientsClaim: true,
  skipWaiting: true,

  runtimeCaching: [],

  autoRegister: true,

  routerBase: undefined,
  publicPath: undefined,

  swSrc: undefined,
  swDest: undefined,
  swURL: undefined,
  swScope: undefined,

  globPatterns: [
    '**/*.{js,css}'
  ],

  clientBuildDir: undefined,

  globDirectory: undefined,

  modifyUrlPrefix: {
    '': undefined
  },

  cacheOptions: {
    cacheId: process.env.npm_package_name || 'nuxt',
    directoryIndex: '/'
  }
}
