const path = require('path')

module.exports = {
  srcDir: __dirname,
  rootDir: path.resolve(__dirname, '../../'),
  buildDir: path.resolve(__dirname, '.nuxt'),
  dev: false,

  generate: {
    dir: path.resolve(__dirname, 'dist')
  },

  modules: [
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa'
  ],

  manifest: {
    name: 'Test Project Name',
    description: 'Test Project Description'
  },

  workbox: {
    offlineAnalytics: true,
    config: {
      debug: true
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
