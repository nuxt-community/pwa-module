
export type iOSType = 'ipad' | 'ipadpro9' | 'ipadpro9' | 'ipadpro10' | 'ipadpro12' | 'iphonese' | 'iphone6' | 'iphoneplus' | 'iphonex' | 'iphonexr' | 'iphonexsmax'
export type iOSSize = [number, number, iOSType]

export interface IconOptions {
  /**
   * Default: `[srcDir]/[staticDir]/icon.png`
   */
  source: string,
  /**
   * Default: `icon.png`
   */
  fileName: string,
  /**
   * Array of sizes to be generated (Square).
   * Default: `[64, 120, 144, 152, 192, 384, 512]`
   */
  sizes: number[],

  /**
   * Default:
   * ```javascript
   * [
   *   [1536, 2048, 'ipad'], // Ipad
   *   [1536, 2048, 'ipadpro9'], // Ipad Pro 9.7"
   *   [1668, 2224, 'ipadpro10'], // Ipad Pro 10.5"
   *   [2048, 2732, 'ipadpro12'], // Ipad Pro 12.9"
   *   [640, 1136, 'iphonese'], // Iphone SE
   *   [50, 1334, 'iphone6'], // Iphone 6
   *   [1080, 1920, 'iphoneplus'], // Iphone Plus
   *   [1125, 2436, 'iphonex'], // Iphone X
   *   [828, 1792, 'iphonexr'], // Iphone XR
   *   [1242, 2688, 'iphonexsmax'] // Iphone XS Max
   * ]
   * ```
   */
  iosSizes: iOSSize[],
  /**
   * Default: `icons`
   */
  targetDir: string,
  /**
   * Make icons accessible through `ctx` or Vue instances.
   *
   * Default: `true`
   */
  plugin: boolean,
  /**
   * Name of property for accessible icons.
   *
   * Default: `$icon`
   */
  pluginName: string,
  /**
   * Array or string of icon purpose.
   *
   * Default: `['any', 'maskable']`
   */
  purpose: string[] | string,
  /**
   * Cache dir for generated icons
   *
   * Default: `{rootDir}/node_modules/.cache/icon`
   */
  cacheDir: string
}
