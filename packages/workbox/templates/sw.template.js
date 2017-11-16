importScripts(<%= options.importScripts.map(i => `'${i}'`).join(', ') %>)

const workboxSW = new self.WorkboxSW(<%= JSON.stringify(options.wbOptions, null, 2) %>)

workboxSW.precache([])

<% options.runtimeCaching.forEach(r => { %>
workboxSW.router.registerRoute('<%= r.urlPattern %>', workboxSW.strategies.<%= r.handler %>({}), 'GET')
<% }) %>
