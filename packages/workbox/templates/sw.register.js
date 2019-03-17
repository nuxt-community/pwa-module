import { Workbox } from 'workbox-cdn/workbox/workbox-window.<%= options.dev ? 'dev' : 'prod' %>.es5.mjs'

export default async function(ctx, inject) {
  const workbox = new Workbox('<%= options.swURL %>', {
    scope: '<%= options.swScope %>'
  })

  // Inject as $workbox
  inject('workbox', workbox)

  if (!'serviceWorker' in navigator) {
    workbox._unsupported = true
    return // Unsupported browser!
  }

  workbox.register()
}
