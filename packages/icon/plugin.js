import Vue from 'vue'

export default async function () {
  const moduleOptions = <%= serialize(options) %>
  Vue.prototype[moduleOptions.iconProperty] = moduleOptions.icons
}
