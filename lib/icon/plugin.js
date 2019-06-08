export default async function (ctx, inject) {
  const icons = <%= JSON.stringify(options.icons) %>
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('<%= options.iconProperty.replace('$', '') %>', getIcon)
}
