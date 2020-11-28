import { PWAOptions } from './pwa'

declare module '@nuxt/types/config/index' {
    interface NuxtOptions {
        pwa?: PWAOptions
        meta?: PWAOptions['meta']
        icon?: PWAOptions['icon']
        workbox?: PWAOptions['workbox']
        manifest?: PWAOptions['manifest']
    }
}
