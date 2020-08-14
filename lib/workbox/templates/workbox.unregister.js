if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      console.info('[pwa] [workbox] Unregistering service worker:', registration)
      registration.unregister()
    }
  })
}

if ('caches' in window) {
  caches.keys()
    .then((keys) => {
      if (keys.length) {
        console.info('[pwa] [workbox] Cleaning cache for:', keys.join(', '))
        for (const key of keys) {
          caches.delete(key)
        }
      }
    })
}
