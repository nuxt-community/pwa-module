
import { IconOptions } from './icon'
import { MetaOptions } from './meta'
import { ManifestOptions } from './manifest'
import { WorkboxOptions } from './workbox'


declare module '@nuxt/types/config/index' {
  interface NuxtOptions {
    pwa: {
      icon: IconOptions | boolean,
      meta: MetaOptions | boolean,
      manifest: ManifestOptions | boolean,
      workbox: WorkboxOptions | boolean
    }
    icon: IconOptions | boolean
    meta: MetaOptions | boolean
    manifest: ManifestOptions | boolean
    workbox: WorkboxOptions | boolean
  }
}
