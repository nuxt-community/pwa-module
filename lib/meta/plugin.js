import meta from './meta.json'
const mergeMeta = require('./meta.merge')

export default function ({ app }) {
  mergeMeta(app.head, meta)
}
