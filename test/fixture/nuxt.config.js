module.exports = {
  dev: false,
  rootDir: __dirname,

  modules: [
    { handler: require('../../') }
  ],

  icon: {
    purpose: 'maskable'
  },

  manifest: {
    name: 'Test Project Name',
    description: 'Test Project Description',
    useWebmanifestExtension: true,
    fileName: 'manifest_test.[ext]?[hash]'
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
    offline: true,
    offlinePage: '/offline.html',
    offlineAssets: [
      '/offline.png'
    ],
    runtimeCaching: [
      {
        urlPattern: 'https://google.com/.*',
        handler: 'cacheFirst',
        method: 'GET'
      }
    ]
  },

  oneSignal: {
    init: {
      appId: 'd867ac26-f7be-4c62-9fdd-b756a33c4a8f'
    }
  }
}
