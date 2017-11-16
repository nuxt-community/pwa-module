window.onNuxtReady(() => {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service workers are not supported.')
    return
  }

  navigator.serviceWorker.register('<%= options.swURL %>', {
    scope: '<%= options.swScope %>'
  }).then(function(registration) {
    window.$sw = registration
  }).catch(function(error) {
    console.error('Service worker registration failed:', error);
  });
})
