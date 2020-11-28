import { version as workboxVersion } from 'workbox-cdn/package.json'
import type { WorkboxOptions } from '../../types/workbox'

export const defaults: WorkboxOptions = {
  // General
  workboxVersion,
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
  swURL: undefined,
  swScope: undefined,
  swDest: undefined,

  // Router
  routerBase: undefined,
  publicPath: undefined,

  dev: undefined,
  cacheNames: undefined
}
