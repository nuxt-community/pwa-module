async function register() {
  if (!'serviceWorker' in navigator) {
    throw new Error('serviceWorker is not supported in current browser!')
  }

  const { Workbox } = await import('workbox-cdn/workbox/workbox-window.<%= options.dev ? 'dev' : 'prod' %>.es5.mjs')

  const workbox = new Workbox('<%= options.swURL %>', {
    scope: '<%= options.swScope %>'
  })

  await workbox.register()

  return workbox
}

window.$workbox = register()
  .catch(error => {<% if (options.dev) { %> console.error('Error registering workbox:', error) <% } %>})

// Auto update application when something changes and update is available!
const workbox = await window.$workbox
if (workbox) {
  workbox.addEventListener('installed', event => {
    if (event.isUpdate) {
      console.debug('There is an update for the PWA app, reloading...')
      window.location.reload()
    }
  })
}

