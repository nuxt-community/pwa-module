importScripts(<%= options.importScripts.map((i) => `'${i}'`).join(', ') %>)

workbox.precaching.precacheAndRoute([], <%= JSON.stringify(options.wbOptions, null, 2) %>)

<% if (options.offlinePage) { %>workbox.precaching.precacheAndRoute(['<%= options.offlinePage %>'])<% } %>
<% if (options.cachingExtensions) { %><%= options.cachingExtensions %><% } %>
<% if (options.clientsClaim) { %>workbox.clientsClaim()<% } %>
<% if (options.skipWaiting) { %>workbox.skipWaiting()<% } %>

<%
options.runtimeCaching.forEach(r => {
  const strategy = JSON.stringify(r.strategyOptions || {})
%>
workbox.routing.registerRoute(new RegExp('<%= r.urlPattern %>'), workbox.strategies.<%= r.handler %>(<%= strategy %>), '<%= r.method %>')
<% }) %>

<% if (options.offlinePage) { %>
// offlinePage support
const strategy = workbox.strategies.staleWhileRevalidate()
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  return strategy.handle({event})
    .catch(() => caches.match('<%= options.offlinePage %>')
})<% } %>

<% if (options.routingExtensions) { %><%= options.routingExtensions %><% } %>
