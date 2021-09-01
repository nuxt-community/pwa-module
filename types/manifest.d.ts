/* eslint camelcase: 0 */

export interface ManifestOptions {
  /**
   * Default: _npm_package_name_
   */
  name: string,
  /**
   * Default: _npm_package_name_
   */
  short_name: string,
  /**
   * Default: undefined
   */
  description: string,
  /**
   *
   */
  icons: Record<string, any>[],
  /**
   * Default: `routerBase + '?standalone=true'`
   */
  start_url: string,
  /**
   * Default: `standalone`
   */
  display: string,
  /**
   * Default: `#ffffff`
   */
  background_color: string,
  /**
   * Default: undefined
   */
  theme_color: string,
  /**
   * Default: `ltr`
   */
  dir: 'ltr' | 'rtl',
  /**
   * Default: `en`
   */
  lang: string,
  /**
   * Default: `false`
   */
  useWebmanifestExtension: boolean,
  /**
   * Default: A combination of `routerBase` and `options.build.publicPath`
   */
  publicPath: string,

  fileName: string,
  crossorigin: boolean
}
