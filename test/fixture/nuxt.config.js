module.exports = {
  dev: false,
  rootDir: __dirname,

  modules: [
    { handler: require('../../') }
  ],

  manifest: {
    name: 'Test Project Name',
    description: 'Test Project Description',
    useWebmanifestExtension: true,
    fileName: 'manifest_test.[ext]?[hash]'
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
          cacheName: 'nuxt-pwa',
          plugins: [{
            use: 'Expiration',
            config: [{
              maxEntries: 10,
              maxAgeSeconds: 300
            }]
          }]
        }
      },
      {
        urlPattern: 'https://vuejs.org/.*',
        strategyOptions: {
          cacheName: 'our-cache',
          plugins: [{
            // eslint-disable-next-line require-await
            cacheWillUpdate: async ({ request, response, event }) => {
              // Return `response`, a different `Response` object, or `null`.
              return response
            },
            // eslint-disable-next-line require-await
            cacheDidUpdate: async ({ cacheName, request, oldResponse, newResponse, event }) => {
              // No return expected
              // Note: `newResponse.bodyUsed` is `true` when this is called,
              // meaning the body has already been read. If you need access to
              // the body of the fresh response, use a technique like:
              // const freshResponse = await caches.match(request, {cacheName});
            },
            // eslint-disable-next-line require-await
            cacheKeyWillBeUsed: async ({ request, mode }) => {
              // `request` is the `Request` object that would otherwise be used as the cache key.
              // `mode` is either 'read' or 'write'.
              // Return either a string, or a `Request` whose `url` property will be used as the cache key.
              // Returning the original `request` will make this a no-op.
              return request
            },
            // eslint-disable-next-line require-await
            cachedResponseWillBeUsed: async ({ cacheName, request, matchOptions, cachedResponse, event }) => {
              // Return `cachedResponse`, a different `Response` object, or null.
              return cachedResponse
            },
            // eslint-disable-next-line require-await
            requestWillFetch: async ({ request }) => {
              // Return `request` or a different `Request` object.
              return request
            },
            // eslint-disable-next-line require-await
            fetchDidFail: async ({ originalRequest, request, error, event }) => {
              // No return expected.
              // NOTE: `originalRequest` is the browser's request, `request` is the
              // request after being passed through plugins with
              // `requestWillFetch` callbacks, and `error` is the exception that caused
              // the underlying `fetch()` to fail.
            },
            // eslint-disable-next-line require-await
            fetchDidSucceed: async ({ request, response }) => {
              // Return `response` to use the network response as-is,
              // or alternatively create and return a new `Response` object.
              return response
            }
          }]
        }
      }
    ]
  }
}
