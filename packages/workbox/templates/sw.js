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

<% if (options.offlineAnalytics) { %>
// Enable offline Google Analytics tracking
workbox.googleAnalytics.initialize()
<% } %>

<% if (options.workboxExtensions) { %>
// -- Start of workboxExtensions --
<%= options.workboxExtensions %>// -- End of workboxExtensions --
<% } %>

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets
<% if (options.preCaching.length) { %>
workbox.precaching.precacheAndRoute(<%= JSON.stringify(options.preCaching, null, 2) %>, <%= JSON.stringify(options.cacheOptions, null, 2) %>)
<% } %>

<% if (options.cachingExtensions) { %>
// -- Start of cachingExtensions --
<%= options.cachingExtensions %>// -- End of cachingExtensions --
<% } %>

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
<% options.runtimeCaching.forEach(r => { %>workbox.routing.registerRoute(new RegExp('<%= r.urlPattern %>'), workbox.strategies.<%= r.handler %> (<%= JSON.stringify(r.strategyOptions || {}) %>), '<%= r.method %>')
<% }) %>

<% if (options.offlinePage) { %>
// Register router handler for offlinePage
workbox.routing.registerRoute(new RegExp('<%= options.pagesURLPattern %>'), ({event}) => {
  return workbox.strategies.networkOnly().handle({event})
    .catch(() => caches.match('<%= options.offlinePage %>'))
})<% } %>

<% if (options.routingExtensions) { %>
// -- Start of routingExtensions --
<%= options.routingExtensions %>// -- End of routingExtensions --
<% } %>
