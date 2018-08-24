importScripts(<%= options.importScripts.map((i) => `'${i}'`).join(', ') %>)

workbox.precaching.precacheAndRoute([], <%= JSON.stringify(options.wbOptions, null, 2) %>)

<% if (options.offlinePage) { %>workbox.precaching.precacheAndRoute(['<%= options.offlinePage %>'])<% } %>
<% if (options.cachingExtensions) { %><%= options.cachingExtensions %><% } %>
<% if (options.clientsClaim) { %>workbox.clientsClaim()<% } %>

<%
options.runtimeCaching.forEach(r => {
  const strategy = JSON.stringify(r.strategyOptions || {})
%>
workbox.routing.registerRoute(new RegExp('<%= r.urlPattern %>'), workbox.strategies.<%= r.handler %>(<%= strategy %>), '<%= r.method %>')
<% }) %>

<% if (options.offlinePage) { %>
// offlinePage support
const strategy = workbox.strategies.staleWhileRevalidate()
// cacheName: '<%= options.wbOptions.cacheId %>'
// })
const offlineRouteHandler = ({event}) => {
  return strategy.handle({event})
    .catch(() => caches.match('<%= options.offlinePage %>')
}
workbox.routing.registerRoute(new RegExp('/.*'), offlineRouteHandler)<% } %>

<% if (options.routingExtensions) { %><%= options.routingExtensions %><% } %>
