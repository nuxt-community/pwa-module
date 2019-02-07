# 📦 OneSignal Module

[![npm](https://img.shields.io/npm/dt/@nuxtjs/onesignal.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/onesignal)
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/onesignal/latest.svg?style=flat-square)](https://www.npmjs.com/package/@nuxtjs/onesignal)

OneSignal is a Free, high volume and reliable push notification service for websites and mobile applications. Setting and using this module is a little tricky as OneSignal requires to register its own Service worker.

First add dependency as it is not being installed by default when using PWA module:

```bash
yarn add @nuxtjs/onesignal # OR npm i @nuxtjs/onesignal
```

Then add module to `nuxt.config.js` **BEFORE** `@nuxtjs/pwa` and provide options under `oneSignal`:

```js
modules: [
  '@nuxtjs/onesignal',
  '@nuxtjs/pwa',
],

// Options
oneSignal: {
  init: {
    appId: 'YOUR_APP_ID',
    allowLocalhostAsSecureOrigin: true,
    welcomeNotification: {
        disable: true
    }
  }
}
```

Add `OneSignalSDKWorker*` to `.gitignore`

See references below for all `init` options.

### Async Functions
This module exposes oneSignal as `$OneSignal` everywhere. So you can call it.
Please note that because of async loading of OneSignal SDK script, every action should be pushed into `$OneSignal` stack.

```js
// Inside page components
this.$OneSignal.push(() => {
    this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
    if (isEnabled) {
      console.log('Push notifications are enabled!')
    } else {
      console.log('Push notifications are not enabled yet.')
    }
  })
})

// Using window and array form
window.$OneSignal.push(['addListenerForNotificationOpened', (data) => {
  console.log('Received NotificationOpened:', data )}
]);
```

### Change OneSignal SDK Script URL

By default this modules ships with latest SDK dist.

You can use recommended CDN by using `cdn: true` or changing it to a custom value using `OneSignalSDK`.

```js
oneSignal: {
  // Use CDN
  cdn: true,

  // Use any custom URL
  OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
}
```

### References

- [Web Push SDK Reference](https://documentation.onesignal.com/docs/web-push-sdk) - Available options and API calls
- [Customize Permission Messages](https://documentation.onesignal.com/docs/customize-permission-messages)
- [Thanks for Subscribing Notifications](https://documentation.onesignal.com/docs/welcome-notifications)
- [Product overview](https://documentation.onesignal.com/docs/product-overview) - More info about OneSignal
- [Web Push SDK Setup](https://documentation.onesignal.com/docs/web-push-sdk-setup-https) - Setup guides for in-depth reading what this modules does.
