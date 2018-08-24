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
const networkOnlyStrategy = workbox.strategies.networkOnly()
const staleWhileRevalidateStrategy = workbox.strategies.staleWhileRevalidate()
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  if (navigator.onLine) {
    return staleWhileRevalidateStrategy.handle({event})
  }
  if (
    event.request.mode === 'navigate' ||
    (
      event.request.method === 'GET' &&
      event.request.headers.get('accept').includes('text/html')
    )
  ) {
    return caches.match('<%= options.offlinePage %>')
  } else {
    return staleWhileRevalidateStrategy.handle({event})
  }
})<% } %>

<% if (options.routingExtensions) { %><%= options.routingExtensions %><% } %>
