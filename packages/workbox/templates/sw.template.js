importScripts(<%= options.importScripts.map(i => `'${i}'`).join(', ') %>)

const workboxSW = new self.WorkboxSW(<%= JSON.stringify(options.wbOptions, null, 2) %>)

workboxSW.precache([])

<% options.runtimeCaching.forEach(r => {
  const strategy = JSON.stringify(r.strategyOptions || {})
  %>
workboxSW.router.registerRoute(new RegExp('<%= r.urlPattern %>'), workboxSW.strategies.<%= r.handler %>(<%= strategy %>), '<%= r.method %>')
<% }) %>
