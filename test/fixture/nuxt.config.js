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

  workbox: {
    config: {
      debug: true
    },
    importScripts: [
      'custom-sw.js'
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
