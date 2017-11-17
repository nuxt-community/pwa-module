var OneSignal = window.OneSignal || [];

OneSignal.push(['init', <%= JSON.stringify(options.onsOpts, null, 2) %>]);

window.$OneSignal = OneSignal

export default function (ctx, inject) {
  inject('OneSignal', OneSignal)
}
