export default async function (ctx, inject) {
  const moduleOptions = <%= serialize(options) %>
    console.log("Icon object:", moduleOptions.icons)
  inject(moduleOptions.iconProperty.replace('$', ''), retrieveIcons(moduleOptions.icons))
}

const retrieveIcons = icons => size => icons[size] || ''
