window.$OneSignal = window.OneSignal = window.OneSignal || [];

OneSignal.push(['init', <%= JSON.stringify(options.onsOpts, null, 2) %>]);

export default function (ctx, inject) {
  inject('OneSignal', OneSignal)
}
