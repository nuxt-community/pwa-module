importScripts(<%= options.importScripts.map(i => `'${i}'`).join(', ') %>)

workbox.precaching.precacheAndRoute([], <%= JSON.stringify(options.wbOptions, null, 2) %>)


<% if(options.clientClaims) { %>
  workbox.clientClaims()
<% } %>

<% options.runtimeCaching.forEach(r => {
  const strategy = JSON.stringify(r.strategyOptions || {})
  %>
workbox.routing.registerRoute(new RegExp('<%= r.urlPattern %>'), workboxSW.strategies.<%= r.handler %>(<%= strategy %>), '<%= r.method %>')
<% }) %>
