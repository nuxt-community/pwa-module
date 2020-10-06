const head = <%= JSON.stringify(options.head, null, 2) %>

export default function ({ app }) {
  for (const key in head) {
    const value = head[key]
    if (Array.isArray(value)) {
      app.head[key] = app.head[key] || []
      for (const item of value) {
        // Avoid duplicates
        if (
          (item.hid && hasMeta(app.head[key], 'hid', item.hid)) ||
          (item.name && hasMeta(app.head[key], 'name', item.name))
        ) {
          continue
        }
        // Add meta
        app.head[key].push(item)
      }
    } else if (typeof value === 'object') {
      app.head[key] = app.head[key] || {}
      for (const attr in value) {
        app.head[key][attr] = value[attr]
      }
    } else if (app.head[key] === undefined) {
      app.head[key] = value
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key])
}
