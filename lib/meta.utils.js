export function mergeMeta (to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!')
    return
  }

  for (const key in from) {
    const value = from[key]
    if (Array.isArray(value)) {
      to[key] = to[key] || []
      for (const item of value) {
        // Avoid duplicates
        if (
          (item.hid && hasMeta(to[key], 'hid', item.hid)) ||
          (item.name && hasMeta(to[key], 'name', item.name))
        ) {
          continue
        }
        // Add meta
        to[key].push(item)
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {}
      for (const attr in value) {
        to[key][attr] = value[attr]
      }
    } else if (to[key] === undefined) {
      to[key] = value
    }
  }
}

function hasMeta (arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key])
}
