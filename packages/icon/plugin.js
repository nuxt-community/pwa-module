export default async function (ctx, inject) {
  const moduleOptions = <%= serialize(options) %>
  inject(moduleOptions.iconProperty.replace('$', ''), retrieveIcons(moduleOptions.icons))
}

const retrieveIcons = icons => size => icons[size] || ''
