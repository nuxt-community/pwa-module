import { CacheExpirationConfig } from 'workbox-expiration'
import { HTTPMethod } from 'workbox-routing'

export type CachingStrategy = 'CacheFirst' | 'CacheOnly' | 'NetworkFirst' | 'NetworkOnly' | 'StaleWhileRevalidate'

export type RuntimeCaching = {
  urlPattern: string,
  handler?: CachingStrategy,
  methods?: HTTPMethod,
  strategyOptions?: {
    cacheName: string,
    cacheExpiration: CacheExpirationConfig
  }
}

export interface WorkboxOptions {
  workboxVersion: string,
  workboxURL: string,
  importScripts: string[],
  /**
   * Default: `true`
   */
  autoRegister: boolean,
  /**
   * Default: `true` for production mode
   */
  enabled: boolean,
  cacheNames: Record<string, any>,
  config: Record<string, any>,
  /**
   * Default: `true`
   */
  clientsClaim: boolean,
  /**
   * Default: `true`
   */
  skipWaiting: boolean,
  /**
   * Default: `false`
   */
  offlineAnalytics: boolean,
  workboxExtensions: string | string[],
  /**
   * Default: `[]`
   */
  precaching: string[],
  cacheOptions: {
    /**
     * Default: `<npm package name> || nuxt`
     */
    cacheId: string,
    /**
     * Default: `/`
     */
    directoryIndex: string,
    /**
     * Default: `undefined`
     */
    revision: string | undefined
  },
  cachingExtensions: string | string[],
  cleanupOutdatedCaches: boolean,
  /**
   * Default: `true`
   */
  offline: boolean,
  /**
   * Default: `NetworkFirst`
   */
  offlineStrategy: CachingStrategy,
  offlinePage: string,
  offlineAssets: string[],
  runtimeCaching: RuntimeCaching[],
  /**
   * Default: `true`
   */
  cacheAssets: boolean,
  routingExtensions: string | string[],
  /**
   * Default: `/_nuxt/`
   */
  assetsURLPattern: string | RegExp,
  /**
   * Auto generated based on `router.base`
   *
   * Default: `/`
   */
  pagesURLPattern: string | RegExp,
  swTemplate: string,
  swURL: string,
  swDest: string,
  /**
   * Default: `routerBase`
   */
  swScope: string,
  /**
   * Default: `/`
   */
  routerBase: string,
  /**
   * Default: `/_nuxt`
   */
  publicPath: string
}
