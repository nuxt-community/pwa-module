importScripts(<%= options.importScripts.map((i) => `'${i}'`).join(', ') %>)

workbox.precaching.precacheAndRoute(
  [<%= options.offlinePage ? `'${options.offlinePage}'` : ''],
  <%= JSON.stringify(options.wbOptions, null, 2) %>
)

<% if (options.clientsClaim) { %>
workbox.clientsClaim()
<% } %>

<%
options.runtimeCaching.forEach(r => {
  const strategy = JSON.stringify(r.strategyOptions || {})
%>
workbox.routing.registerRoute(new RegExp('<%= r.urlPattern %>'), workbox.strategies.<%= r.handler %>(<%= strategy %>), '<%= r.method %>')
<% }) %>

<% if (options.cachingExtensions) { %>
<%= options.cachingExtensions %>
<% } %>

<% if (options.offlinePage) { %>
// offlinePage support

const offlineRoute = new workbox.routing.NavigationRoute(
  async (args) => {
    try {
      const response = await staleWhileRevalidate.handle(args)
      return reponse || caches.match('<%= options.offlinePage %>')
    } catch (error) {
      return caches.match('<%= options.offlinePage %>')
    }
  }, {
    whitelist: [],
    blacklist: []
  }
)

navigationRoute.staleWhileRevalidate = workbox.strategies.staleWhileRevalidate({
  cacheName: '<%= options.cacheId %>'
})

workbox.routing.registerRoute(offlineRoute)
<% } %>

<% if (options.routingExtensions) { %>
<%= options.routingExtensions %>
<% } %>
