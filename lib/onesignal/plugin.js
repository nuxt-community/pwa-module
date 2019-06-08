window.$OneSignal = window.OneSignal = window.OneSignal || [];

OneSignal.push(['init', <%= JSON.stringify(options.init, null, 2) %>]);

export default function (ctx, inject) {
  inject('OneSignal', OneSignal)
}
