function onError(error) {<% if (options.dev) { %>console.error('Error registering workbox:', error) <% } %>}

export default function (ctx, inject) {
  let workbox = {}

  try {
    // workbox-window does not detects unsupported browsers
    if (!'serviceWorker' in navigator) {
      throw new Error('serviceWorker is not supported in current browser!')
    }

    // Use require() instead of import() to prevent creating extra chunk
    // Use es5 version to prevent crashing older browsers while parsing bundle
    const { Workbox } = require('workbox-cdn/workbox/workbox-window.<%= options.dev ? 'dev' : 'prod' %>.es5.mjs')

    workbox = new Workbox('<%= options.swURL %>', {
      scope: '<%= options.swScope %>'
    })

    workbox.register().catch(onError)
  } catch (error) {
    onError(error)
  }

  // Inject as $workbox
  inject('workbox', workbox)
}
