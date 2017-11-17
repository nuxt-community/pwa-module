module.exports = {
  srcDir: __dirname,
  dev: false,
  build: {
    extractCSS: true,
    filenames: {
      css: 'vendor.css',
      manifest: 'manifest.js',
      vendor: 'vendor.js',
      app: 'app.js',
      chunk: '[name].js'
    }
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
    ]
  },
  oneSignal: {
    appId: 'd867ac26-f7be-4c62-9fdd-b756a33c4a8f'
  }
}
