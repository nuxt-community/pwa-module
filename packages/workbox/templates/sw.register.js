export default async function (ctx, inject) {
  let workbox = {}

  try {
    if (!'serviceWorker' in navigator) {
      throw new Error('Serviceworker is not supported!')
    }

    const { Workbox } = require('workbox-cdn/workbox/workbox-window.<%= options.dev ? 'dev' : 'prod' %>.es5.mjs')

    workbox = new Workbox('<%= options.swURL %>', {
      scope: '<%= options.swScope %>'
    })

    workbox.register()
  } catch (e) {
    console.warn('Cannot register workbox:', e)
  }

  // Inject as $workbox
  inject('workbox', workbox)
}
