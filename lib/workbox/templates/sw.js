importScripts(<%= [options.workboxURL, ...options.importScripts].map((i) => `'${i}'`).join(', ') %>)

// --------------------------------------------------
// Configure
// --------------------------------------------------

<% if (options.config) {%>
// Set workbox config
workbox.setConfig(<%= JSON.stringify(options.config, null, 2) %>)
<% } %>

<% if (options.cacheNames) {%>
// Set workbox cache names
workbox.core.setCacheNameDetails(<%= JSON.stringify(options.cacheNames, null, 2) %>)
<% } %>

<% if (options.clientsClaim) { %>
// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()
<% } %>

<% if (options.skipWaiting) { %>
// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()
<% } %>

<% if (options.cleanupOutdatedCaches) { %>
workbox.precaching.cleanupOutdatedCaches()
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
<%
const pluginModules = {
  'BackgroundSync': 'backgroundSync.BackgroundSyncPlugin',
  'BroadcastUpdate': 'broadcastUpdate.BroadcastUpdatePlugin',
  'CacheableResponse': 'cacheableResponse.CacheableResponsePlugin',
  'Expiration': 'expiration.ExpirationPlugin',
  'RangeRequests': 'rangeRequests.RangeRequestsPlugin',
}
function toCode(param) {
  let result = ''
  switch (typeof param) {
    case 'string':
      result += `'${param.replace(/\\/g, '\\\\').replace('"', '\\"').replace("'", "\\'")}'`
      break
    case 'number':
    case 'boolean':
    case 'undefined':
      result += param
      break
    case 'object':
      if (param instanceof Array) result += `[${param.map(toCode).join(',')}]`
      if (param === null) result += 'null'
      else result += `{${Object.entries(param).map(([key, value]) => key + ':' + toCode(value))}}`
      break
    case 'function':
      throw new Error('Functions in plugin configuration are not supported, consider using workboxExtensions to inject custom code or completely override template using swTemplate.')
    default:
      throw new Error('Unsupported type found in plugin configuration.')
  }
  return result
}
options.runtimeCaching.forEach(r => {
  let strategyOptionsCode = ''
  if (r.strategyOptions) {
    strategyOptionsCode += `{`

    const strategyOptionsCodeChunks = []

    // process plugins field
    if (r.strategyOptions.plugins) {
      let pluginsChunk = 'plugins:['
      pluginsChunk += r.strategyOptions.plugins.map(p => 'new workbox.' + pluginModules[p.use] + '(' + p.config.map(toCode).join(',') + ')').join(',')
      pluginsChunk += ']'
      strategyOptionsCodeChunks.push(pluginsChunk)
    }

    // process the rest fields
    const options = Object.assign({}, r.strategyOptions)
    delete options.plugins
    const remainingOptionsCode = toCode(options).slice(1, -1)
    if (remainingOptionsCode !== '') {
      strategyOptionsCodeChunks.push(remainingOptionsCode)
    }

    strategyOptionsCode += strategyOptionsCodeChunks.join(',')
    strategyOptionsCode += '}'
  }
%>workbox.routing.registerRoute(new RegExp('<%= r.urlPattern %>'), new workbox.strategies.<%= r.handler %>(<%= strategyOptionsCode %>), '<%= r.method %>')
<% }) %>

<% if (options.offlinePage) { %>
// Register router handler for offlinePage
workbox.routing.registerRoute(new RegExp('<%= options.pagesURLPattern %>'), ({request,event}) => {
  return new workbox.strategies.<%= options.offlineStrategy %>().handle({request,event})
    .catch(() => caches.match('<%= options.offlinePage %>'))
})<% } %>

<% if (options.routingExtensions) { %>
// -- Start of routingExtensions --
<%= options.routingExtensions %>// -- End of routingExtensions --
<% } %>
