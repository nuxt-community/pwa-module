import { mergeMeta } from './meta.utils'
import meta from './meta.json'

export default function ({ app }) {
  mergeMeta(app.head, meta)
}
