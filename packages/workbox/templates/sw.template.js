importScripts('<%= options.importPath %>')

const workboxSW = new self.WorkboxSW({
  cacheId: '<%= options.wb.cacheId %>',
  clientsClaim: <%= options.wb.clientsClaim %>,
  directoryIndex: '<%= options.wb.directoryIndex %>'
})

workboxSW.precache([])

<% options.wb.runtimeCaching.forEach(r => { %>
workboxSW.router.registerRoute('<%= r.urlPattern %>', workboxSW.strategies.<%= r.handler %>({}), 'GET')
<% }) %>
