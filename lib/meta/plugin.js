import meta from './meta.json'
import mergeMeta from './meta.merge'

export default function ({ app }) {
  mergeMeta(app.head, meta)
}
