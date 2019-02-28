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
    // '@nuxtjs/onesignal',
    '@nuxtjs/pwa'
  ],

  manifest: {
    name: 'Test Project Name',
    description: 'Test Project Description'
  },

  // build: {
  //   publicPath: 'https://cdn.com/assets/'
  // },

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
