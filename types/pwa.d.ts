import { MetaOptions } from './meta'
import { IconOptions } from './icon'
import { WorkboxOptions } from './workbox'
import { ManifestOptions } from './manifest'

export interface PWAOptions {
  meta?: MetaOptions | false
  icon?: IconOptions | false
  workbox?: WorkboxOptions | false
  manifest?: ManifestOptions | false
}
