importScripts(<%= [options.workboxURL, ...options.importScripts].map((i) => `'${i}'`).join(', ') %>)

// --------------------------------------------------
// Configure
// --------------------------------------------------

<% if (options.config) {%>
// Set workbox config
workbox.setConfig(<%= JSON.stringify(options.config, null, 2) %>)
<% } %>

<% if (options.clientsClaim) { %>
// Start controlling any existing clients as soon as it activates
workbox.clientsClaim()
<% } %>

<% if (options.skipWaiting) { %>
// Skip over the SW waiting lifecycle stage
workbox.skipWaiting()
<% } %>

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache build artifacts
workbox.precaching.precacheAndRoute([], <%= JSON.stringify(options.cacheOptions, null, 2) %>)

<% if (options.offlineAssets.length) { %>
// Precache offlineAssets
workbox.precaching.precacheAndRoute([<%= options.offlineAssets.map((i) => `'${i}'`).join(', ') %>])
<% } %>

<% if (options.offlinePage) { %>
// Precache offlinePage
workbox.precaching.precacheAndRoute(['<%= options.offlinePage %>'])
<% } %>

<% if (options.cachingExtensions) { %>
// -- Start of cachingExtensions --
<%= options.cachingExtensions %>
// -- End of cachingExtensions --
<% } %>

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
<% options.runtimeCaching.forEach(r => { %>workbox.routing.registerRoute(new RegExp('<%= r.urlPattern %>'), workbox.strategies.<%= r.handler %> (<%= JSON.stringify(r.strategyOptions || {}) %>), '<%= r.method %>')
<% }) %>

<% if (options.offlinePage) { %>
// Register router handler for offlinePage
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  return workbox.strategies.networkOnly().handle({event})
    .catch(() => caches.match('<%= options.offlinePage %>'))
})<% } %>

<% if (options.routingExtensions) { %>
// -- Start of routingExtensions --
<%= options.routingExtensions %>
// -- End of routingExtensions --
<% } %>
