import pwaModule from '../../src/pwa'

export default {
  target: 'static',

  generate: {
    staticAssets: {
      version: 'default'
    }
  },

  buildModules: [
    pwaModule
  ],

  manifest: {
    name: 'Test Project Name',
    description: 'Test Project Description',

    useWebmanifestExtension: true,
    fileName: 'manifest_test.[ext]?[hash]',
    orientation: 'portrait'
  },

  meta: {
    nativeUI: true
  },

  workbox: {
    offlineAnalytics: true,
    dev: true,
    config: {
      debug: true
    },
    cacheNames: {
      prefix: 'test',
      googleAnalytics: 'test-ga'
    },
    cacheOptions: {
      revision: 'test-rev'
    },
    importScripts: [
      'custom-sw.js'
    ],
    workboxExtensions: [
      '~/sw/workbox'
    ],
    cachingExtensions: [
      '~/sw/caching'
    ],
    routingExtensions: [
      '~/sw/routing'
    ],
    preCaching: [
      'precache.js'
    ],
    // offlinePage: '/offline.html',
    // offlineAssets: [
    //   '/offline.png'
    // ],
    runtimeCaching: [
      {
        urlPattern: 'https://google.com/.*',
        handler: 'cacheFirst',
        method: 'GET'
      },
      {
        urlPattern: 'https://pwa.nuxtjs.org/.*',
        handler: 'CacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheName: 'nuxt-pwa'
        },
        strategyPlugins: [
          {
            use: 'Expiration',
            config: {
              maxEntries: 10,
              maxAgeSeconds: 300
            }
          }
        ]
      }
    ]
  }
}
