import { MetaOptions } from './meta'
import { IconOptions } from './icon'
import { WorkboxOptions } from './workbox'
import { ManifestOptions } from './manifest'

export interface PWAContext {
  meta?: MetaOptions
  icon?: IconOptions
  workbox?: WorkboxOptions
  manifest?: ManifestOptions

  _manifestMeta: any // vue-meta record
}
