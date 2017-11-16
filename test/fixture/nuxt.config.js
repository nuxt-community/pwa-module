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
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'Test Project Name',
    description: 'Test Project Description'
  },
  workbox: {
    importScripts: [
      'custom-sw.js'
    ]
  }
}
