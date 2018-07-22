importScripts(<%= options.importScripts.map(i => `'${i}'`).join(', ') %>)

workbox.precaching.precacheAndRoute([], <%= JSON.stringify(options.wbOptions, null, 2) %>)

<% if(options.clientsClaim) { %>
workbox.clientsClaim()
<% } %>

<%
options.runtimeCaching.forEach(r => {
  const strategy = JSON.stringify(r.strategyOptions || {})
%>
workbox.routing.registerRoute(new RegExp('<%= r.urlPattern %>'), workbox.strategies.<%= r.handler %>(<%= strategy %>), '<%= r.method %>')
<% }) %>
