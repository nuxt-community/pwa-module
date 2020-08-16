export type OgImageObject = {
  path: string,
  width: number,
  height: number,
  type: string
}

export interface MetaOptions {
  /**
   * Default: `utf-8`
   */
  charset: string,
  /**
   * Default: `width=device-width, initial-scale=1`
   *
   * Meta: `viewport`
   */
  viewport: string,
  /**
   * Default: `true`
   *
   * Meta: `mobile-web-app-capable`
   */
  mobileApp: boolean,
  /**
   * Default: `false`
   *
   * Meta: `apple-mobile-web-app-capable`
   */
  mobileAppIOS: boolean,
  /**
   * Default: `default`
   */
  appleStatusBarStyle: string,
  /**
   * Default: `true` (to use options.icons)
   *
   * Meta: `shortcut icon` + `apple-touch-icon`
   */
  favicon: boolean,
  /**
   * Default: _npm_package_name_
   *
   * Meta: `title`
   */
  name: string,
  /**
   * Default: _npm_package_author_name_
   *
   * Meta: `author`
   */
  author: string,
  /**
   * Default: _npm_package_description_
   *
   * Meta: `description`
   */
  description: string,
  /**
   * Default: `options.loading.color`
   *
   * Meta: `description`
   */
  theme_color: string,
  /**
   * Default: `en`
   *
   * Meta: `lang`
   */
  lang: string,
  /**
   * Default: `website`
   *
   * Meta: `og:type`
   */
  ogType: string,
  /**
   * Default: _npm_package_name_
   *
   * Meta: `og:site_name`
   */
  ogSiteName: string,
  /**
   * Default: _npm_package_name_
   *
   * Meta: `og:title`
   */
  ogTitle: string,
  /**
   * Default: _npm_package_description_
   *
   * Meta: `og:description`
   */
  ogDescription: string,
  /**
   * Default: `undefined`
   *
   * Meta: `N/A`
   */
  ogHost: string | undefined,
  /**
   * Default: `true`
   *
   * Meta: `og:image` and sub-tags
   */
  ogImage: boolean | string | OgImageObject,
  /**
   * Default: ogHost (if defined)
   *
   * Meta: `og:url`
   */
  ogUrl: string | undefined,
  /**
   * Default: `undefined`
   *
   * Meta: `twitter:card`
   */
  twitterCard: string | undefined,
  /**
   * Default: `undefined`
   *
   * Meta: `twitter:site`
   */
  twitterSite: string | undefined,
  /**
   * Default: `undefined`
   *
   * Meta: `twitter:creator`
   */
  twitterCreator: string | undefined,
  /**
   * Default: `false`
   */
  nativeUI: boolean
}
