import { HTTPMethod } from 'workbox-routing'
import { Plugin as BackgroundSyncPlugin } from 'workbox-background-sync'
import { Plugin as BroadcastUpdatePlugin } from 'workbox-broadcast-update'
import { Plugin as CacheableResponsePlugin } from 'workbox-cacheable-response'
import { Plugin as ExpirationPlugin } from 'workbox-expiration'
import { Plugin as RangeRequestsPlugin } from 'workbox-range-requests'
import {
  StaleWhileRevalidateOptions,
  CacheFirstOptions,
  NetworkFirstOptions,
  NetworkOnlyOptions,
  CacheOnlyOptions
} from 'workbox-strategies'

export type CachingStrategy = 'CacheFirst' | 'CacheOnly' | 'NetworkFirst' | 'NetworkOnly' | 'StaleWhileRevalidate'

export interface RuntimeCaching {
  urlPattern: string
  handler?: CachingStrategy
  method?: HTTPMethod
  strategyOptions?: StrategyOptions
  strategyPlugins?: StrategyPlugin[]
}

export type StrategyOptions =
  Omit<StaleWhileRevalidateOptions | CacheFirstOptions | NetworkFirstOptions | NetworkOnlyOptions | CacheOnlyOptions, 'plugins'>


export type StrategyPlugin = BackgroundSync | BroadcastUpdate | CacheableResponse | Expiration | RangeRequests

type StrategyPluginOf<name, T> = {
  use: name
  config: ConstructorParameters<T>[0] | ConstructorParameters<T>
}

export type BackgroundSync = StrategyPluginOf<'BackgroundSync', BackgroundSyncPlugin>
export type BroadcastUpdate = StrategyPluginOf<'BroadcastUpdate', BroadcastUpdatePlugin>
export type CacheableResponse = StrategyPluginOf<'CacheableResponse', CacheableResponsePlugin>
export type Expiration = StrategyPluginOf<'Expiration', ExpirationPlugin>
export type RangeRequests = StrategyPluginOf<'RangeRequests', RangeRequestsPlugin>


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
