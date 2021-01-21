import hasha from 'hasha'
import type { ManifestOptions, PWAContext } from '../types'
import { joinUrl, getRouteParams, emitAsset } from './utils'

export function manifest (nuxt, pwa: PWAContext) {
  const { routerBase, publicPath } = getRouteParams(nuxt.options)

  // Combine sources
  const defaults: ManifestOptions = {
    name: process.env.npm_package_name,
    short_name: process.env.npm_package_name,
    description: process.env.npm_package_description,
    publicPath,
    icons: [],
    start_url: routerBase + '?standalone=true',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: pwa.meta.theme_color || '#ffffff',
    lang: 'en',
    useWebmanifestExtension: false,
    fileName: 'manifest.[hash].[ext]',
    dir: undefined,
    crossorigin: undefined
  }

  const options: ManifestOptions = { ...defaults, ...pwa.manifest }

  // Remove extra fields from manifest
  const manifest = { ...options }
  // @ts-ignore
  delete manifest.src
  delete manifest.publicPath
  delete manifest.useWebmanifestExtension
  delete manifest.fileName

  // Generate file name
  const manifestFileName = options.fileName
    .replace('[hash]', hasha(JSON.stringify(manifest)).substr(0, 8))
    .replace('[ext]', options.useWebmanifestExtension ? 'webmanifest' : 'json')

  // Merge final manifest into options.manifest for other modules
  if (!nuxt.options.manifest) {
    nuxt.options.manifest = {}
  }
  Object.assign(nuxt.options.manifest, manifest)
  Object.assign(pwa.manifest, manifest)

  // Register webpack plugin to emit manifest
  const manifestSource = JSON.stringify(manifest, null, 2)
  emitAsset(nuxt, manifestFileName, manifestSource)

  // Add manifest meta
  const manifestMeta = { rel: 'manifest', href: joinUrl(options.publicPath, manifestFileName), hid: 'manifest' } as any
  if (manifest.crossorigin) {
    manifestMeta.crossorigin = manifest.crossorigin
  }
  pwa._manifestMeta = manifestMeta
}
