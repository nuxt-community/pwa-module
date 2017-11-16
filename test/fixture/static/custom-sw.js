console.log('Custom service worker!')

self.addEventListener('install', function (e) {
  console.log('Install event:', e)
})

self.addEventListener('activate', function (e) {
  console.log('Activate event:', e)
})
