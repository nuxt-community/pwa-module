import path from 'path'

export default {
  srcDir: __dirname,
  rootDir: path.resolve(__dirname, '../../'),
  buildDir: path.resolve(__dirname, '.nuxt2'),
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
    dev: true,
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
