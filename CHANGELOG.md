# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0-beta.19](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.18...v3.0.0-beta.19) (2019-09-11)


### Bug Fixes

* expose modified pwa context to the config ([c325e44](https://github.com/nuxt-community/pwa-module/commit/c325e44))
* truncate manifest hash ([5c74621](https://github.com/nuxt-community/pwa-module/commit/5c74621))

## [3.0.0-beta.18](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.17...v3.0.0-beta.18) (2019-09-09)


### Bug Fixes

* revert compileTemplate as is fixed by nuxt/nuxt.js[#6283](https://github.com/nuxt-community/pwa-module/issues/6283) for 2.9.x ([d0f96de](https://github.com/nuxt-community/pwa-module/commit/d0f96de))
* use shared pwa context ([3c19bae](https://github.com/nuxt-community/pwa-module/commit/3c19bae))

## [3.0.0-beta.17](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.16...v3.0.0-beta.17) (2019-09-05)


### Features

* `pwa.` scopped options ([010fe0e](https://github.com/nuxt-community/pwa-module/commit/010fe0e))
* use `jimp-compact` ([5e37b58](https://github.com/nuxt-community/pwa-module/commit/5e37b58))

# [3.0.0-beta.16](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.15...v3.0.0-beta.16) (2019-05-07)


### Bug Fixes

* **icon:** handle situation where the iconSrc is `null` or `undefined` ([#187](https://github.com/nuxt-community/pwa-module/issues/187)) ([66be874](https://github.com/nuxt-community/pwa-module/commit/66be874))





# [3.0.0-beta.15](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.14...v3.0.0-beta.15) (2019-05-07)


### Bug Fixes

* **workbox:** disable `cacheAssets` for dev mode ([dbf6d67](https://github.com/nuxt-community/pwa-module/commit/dbf6d67))
* **workbox:** use `NetworkFirst `for dev ([9a67580](https://github.com/nuxt-community/pwa-module/commit/9a67580))


### Features

* **workbox:** support `offlineStrategy` ([e377436](https://github.com/nuxt-community/pwa-module/commit/e377436))
* rewrite icon with async image resizer ([#171](https://github.com/nuxt-community/pwa-module/issues/171))


### Reverts

* revert unnecessary HMR regex ([1ac5f5c](https://github.com/nuxt-community/pwa-module/commit/1ac5f5c))


### BREAKING CHANGES

* **workbox:** default `offlineStrategy` changed from `NetworkOnly` to `NetworkFirst` when `offlinePage` is enabled





# [3.0.0-beta.14](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.13...v3.0.0-beta.14) (2019-03-17)


### Bug Fixes

* **onesignal:** ensure no duplicate script is added ([#161](https://github.com/nuxt-community/pwa-module/issues/161)) ([89c1a1d](https://github.com/nuxt-community/pwa-module/commit/89c1a1d))


### Features

* **workbox:** make plugin fully asynchronous ([1eb1190](https://github.com/nuxt-community/pwa-module/commit/1eb1190))
* improve computed cacheId ([cd6c9cc](https://github.com/nuxt-community/pwa-module/commit/cd6c9cc))
* improve sw.register error handling ([9aa76f8](https://github.com/nuxt-community/pwa-module/commit/9aa76f8))





# [3.0.0-beta.13](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.12...v3.0.0-beta.13) (2019-03-17)


### Features

* **workbox:** improve sw.register ([c35f610](https://github.com/nuxt-community/pwa-module/commit/c35f610))
* sync workbox version with workbox-window ([9a3632a](https://github.com/nuxt-community/pwa-module/commit/9a3632a))





# [3.0.0-beta.12](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2019-03-05)


### Bug Fixes

* **pwa-utils:** don't combine with esm ([fddfa7a](https://github.com/nuxt-community/pwa-module/commit/fddfa7a)), closes [#147](https://github.com/nuxt-community/pwa-module/issues/147)





# [3.0.0-beta.11](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2019-03-05)


### Bug Fixes

* **workbox:** always prepend routerBase to swURL ([d3a52b6](https://github.com/nuxt-community/pwa-module/commit/d3a52b6)), closes [#157](https://github.com/nuxt-community/pwa-module/issues/157)


### Features

* **workbox:** allow cache names to be configured ([#154](https://github.com/nuxt-community/pwa-module/issues/154)) ([2d7ed53](https://github.com/nuxt-community/pwa-module/commit/2d7ed53))
* **workbox:** workbox-window support ([2e356d0](https://github.com/nuxt-community/pwa-module/commit/2e356d0))





# [3.0.0-beta.10](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2019-02-27)


### Features

* **workbox:** use workbox 4.0.0-0 ([70813ef](https://github.com/nuxt-community/pwa-module/commit/70813ef))





# [3.0.0-beta.9](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2019-02-27)


### Bug Fixes

* **pwa-utils:** handle non-strings in `startCase` ([#150](https://github.com/nuxt-community/pwa-module/issues/150)) ([782217a](https://github.com/nuxt-community/pwa-module/commit/782217a))





# [3.0.0-beta.8](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2019-02-18)


### Bug Fixes

* **manifest:** remove publicPath field ([b03dc14](https://github.com/nuxt-community/pwa-module/commit/b03dc14))





# [3.0.0-beta.7](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2019-02-17)


### Bug Fixes

* **module:** handle readJSFiles for string param ([#143](https://github.com/nuxt-community/pwa-module/issues/143)) ([4f06479](https://github.com/nuxt-community/pwa-module/commit/4f06479))


### Features

* **workbox:** bump to 4.0.0-rc.2 ([7e278f0](https://github.com/nuxt-community/pwa-module/commit/7e278f0))





# [3.0.0-beta.6](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2019-02-08)


### Bug Fixes

* relax pages regex for workbox 4 compatiblity ([04e74a7](https://github.com/nuxt-community/pwa-module/commit/04e74a7))


### Features

* cleanupOutdatedCaches ([9167013](https://github.com/nuxt-community/pwa-module/commit/9167013))
* **workbox:** assetsURLPattern, pagesURLPattern ([5fc3d66](https://github.com/nuxt-community/pwa-module/commit/5fc3d66))
* **workbox:** preCaching option ([67f1c3d](https://github.com/nuxt-community/pwa-module/commit/67f1c3d))
* **workbox:** upgrade workboxVersion to 4.0.0-rc.0 ([b364572](https://github.com/nuxt-community/pwa-module/commit/b364572))





# [3.0.0-beta.5](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.3...v3.0.0-beta.5) (2019-02-08)


### Bug Fixes

* add workboxExtensions to defaults ([#138](https://github.com/nuxt-community/pwa-module/issues/138)) ([ac8ba74](https://github.com/nuxt-community/pwa-module/commit/ac8ba74))





# [3.0.0-beta.3](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2019-02-07)


### Bug Fixes

* **onesignal:** add cache query to sw.js ([33f8f61](https://github.com/nuxt-community/pwa-module/commit/33f8f61))
* **pwa-utils:** ensure joinUrl not modifying scheme part ([09a465a](https://github.com/nuxt-community/pwa-module/commit/09a465a))


### Features

* options.dev ([fb0d38c](https://github.com/nuxt-community/pwa-module/commit/fb0d38c))





# [3.0.0-beta.2](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2019-02-07)


### Features

* offlineAnalytics ([#55](https://github.com/nuxt-community/pwa-module/issues/55)) ([4c4d3ff](https://github.com/nuxt-community/pwa-module/commit/4c4d3ff))
* workboxExtensions and extension reading fixes ([5c56484](https://github.com/nuxt-community/pwa-module/commit/5c56484))





# [3.0.0-beta.1](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.0...v3.0.0-beta.1) (2019-02-07)


### Features

* **icon:** allow reading icon from assetc/icon.png ([#29](https://github.com/nuxt-community/pwa-module/issues/29)) ([9e0fde3](https://github.com/nuxt-community/pwa-module/commit/9e0fde3))
* add HMR test suit ([ff3d502](https://github.com/nuxt-community/pwa-module/commit/ff3d502))
* use better regexes ([318228e](https://github.com/nuxt-community/pwa-module/commit/318228e))





# [3.0.0-beta.0](https://github.com/nuxt-community/pwa-module/compare/v2.6.0...v3.0.0-beta.0) (2019-02-04)


### Bug Fixes

* Handle `ogImage` as url ([#121](https://github.com/nuxt-community/pwa-module/issues/121)) ([d6dc82b](https://github.com/nuxt-community/pwa-module/commit/d6dc82b))
* Routing order for default offline route `/.*` must be last ([#100](https://github.com/nuxt-community/pwa-module/issues/100)) ([1c829d0](https://github.com/nuxt-community/pwa-module/commit/1c829d0))


### Code Refactoring

* Use tapable hooks ([#103](https://github.com/nuxt-community/pwa-module/issues/103)) ([9f27d5c](https://github.com/nuxt-community/pwa-module/commit/9f27d5c))
* Remove debug ([92ba73e](https://github.com/nuxt-community/pwa-module/commit/92ba73e))

### Features

* **onesignal:** Use CDN by default ([7c78c67](https://github.com/nuxt-community/pwa-module/commit/7c78c67))
* **workbox:** Rewrite workbox ([#122](https://github.com/nuxt-community/pwa-module/issues/122)) ([9e49896](https://github.com/nuxt-community/pwa-module/commit/9e49896))
* **icon:** new options ([#126](https://github.com/nuxt-community/pwa-module/issues/126)) ([12e6576](https://github.com/nuxt-community/pwa-module/commit/12e6576))
* **workbox:** change the order of default `runtimeCache` ([#106](https://github.com/nuxt-community/pwa-module/issues/106)) ([033b504](https://github.com/nuxt-community/pwa-module/commit/033b504))


### BREAKING CHANGES

* Only nuxt 2+ supported ([854d826](https://github.com/nuxt-community/pwa-module/commit/854d826))
* webpack >= 4 is required


<a name="2.6.0"></a>
# [2.6.0](https://github.com/nuxt-community/pwa-module/compare/v2.5.0...v2.6.0) (2018-09-21)


### Bug Fixes

* **workbox:** add missing lodash dependency ([#91](https://github.com/nuxt-community/pwa-module/issues/91)) ([da2c36f](https://github.com/nuxt-community/pwa-module/commit/da2c36f))


### Features

* **icon:** update to jimp 0.5.0 ([b071c4b](https://github.com/nuxt-community/pwa-module/commit/b071c4b))
* **workbox:** support pass config object to `workbox.setConfig` ([#95](https://github.com/nuxt-community/pwa-module/issues/95)) ([b5dab8a](https://github.com/nuxt-community/pwa-module/commit/b5dab8a))





<a name="2.5.0"></a>
# [2.5.0](https://github.com/nuxt-community/pwa-module/compare/v2.4.0...v2.5.0) (2018-09-02)


### Features

* **icon:** make icons accessible ([#51](https://github.com/nuxt-community/pwa-module/issues/51)) ([92bccd3](https://github.com/nuxt-community/pwa-module/commit/92bccd3))





<a name="2.4.0"></a>
# [2.4.0](https://github.com/nuxt-community/pwa-module/compare/v2.3.2...v2.4.0) (2018-08-28)


### Bug Fixes

* **icon:** temporary use jimp@0.3.4 ([#84](https://github.com/nuxt-community/pwa-module/issues/84)) ([3f0e718](https://github.com/nuxt-community/pwa-module/commit/3f0e718))
* **workbox:** infer default value of globDirectory from webpack config. fixes [#83](https://github.com/nuxt-community/pwa-module/issues/83). ([c7102fd](https://github.com/nuxt-community/pwa-module/commit/c7102fd))
* **workbox:** more fixes regarding nuxt 2 dist directory changes. fixes [#83](https://github.com/nuxt-community/pwa-module/issues/83). ([7a8bb3b](https://github.com/nuxt-community/pwa-module/commit/7a8bb3b))


### Features

* **worbox:** offlineAssets ([#86](https://github.com/nuxt-community/pwa-module/issues/86)) ([27c8fa1](https://github.com/nuxt-community/pwa-module/commit/27c8fa1))
* **workbox:** offline page assets ([#85](https://github.com/nuxt-community/pwa-module/issues/85)) ([8bc4a3b](https://github.com/nuxt-community/pwa-module/commit/8bc4a3b))





<a name="2.3.2"></a>
# 2.3.2 (2018-08-24)

### Bug Fixes

* **workbox:** `staleWhileRevalidate()` -> `networkOnly()` for offline pages ([832d60f](https://github.com/nuxt-community/pwa-module/commit/832d60f))


<a name="2.3.1"></a>
# 2.3.1 (2018-08-24)

### Bug Fixes

* **workbox:** `offlinePage` syntax error ([af21d74](https://github.com/nuxt-community/pwa-module/commit/af21d74))

<a name="2.3.0"></a>
# 2.3.0 (2018-08-24)

### Bug Fixes

* **docs:** add reference to pwa module ([49b7c49](https://github.com/nuxt-community/pwa/commit/49b7c49))
* **icon:** await on build ([e3c1be2](https://github.com/nuxt-community/pwa/commit/e3c1be2))
* **icon:** generate only on build ([9d68d70](https://github.com/nuxt-community/pwa/commit/9d68d70))
* **manifest:** run only on build ([ecaa835](https://github.com/nuxt-community/pwa/commit/ecaa835))
* **meta:** add unique identifiers to meta fields ([#23](https://github.com/nuxt-community/pwa/issues/23)) ([76a1f89](https://github.com/nuxt-community/pwa/commit/76a1f89))
* **meta:** generate only on build ([1cace26](https://github.com/nuxt-community/pwa/commit/1cace26))
* **meta:** only set og:url when it has been defined through ogHost or options ([#44](https://github.com/nuxt-community/pwa/issues/44)) ([354f818](https://github.com/nuxt-community/pwa/commit/354f818))
* **meta:** remove minimal-ui from default viewport ([cf48b3f](https://github.com/nuxt-community/pwa/commit/cf48b3f)), closes [#10](https://github.com/nuxt-community/pwa/issues/10)
* **pwa:** no more optimize dependency ([a1c149f](https://github.com/nuxt-community/pwa/commit/a1c149f))
* **workbox:** faster service worker register ([07524a2](https://github.com/nuxt-community/pwa/commit/07524a2))
* **workbox:** hardcoded `static` dir ([#73](https://github.com/nuxt-community/pwa/issues/73)) ([6d241ec](https://github.com/nuxt-community/pwa/commit/6d241ec))
* **workbox:** make cacheId independent of npm package version ([b744a27](https://github.com/nuxt-community/pwa/commit/b744a27))
* **workbox:** use regexp for runtimeCaching. fixes [#14](https://github.com/nuxt-community/pwa/issues/14). ([f384103](https://github.com/nuxt-community/pwa/commit/f384103))
* don't override title when titleTemplate is provided  ([#48](https://github.com/nuxt-community/pwa/issues/48)) ([8c3f319](https://github.com/nuxt-community/pwa/commit/8c3f319))
* workaround to fill meta with SPA and nuxt start ([a0fb908](https://github.com/nuxt-community/pwa/commit/a0fb908))


### Features

* Add compatibility for nuxt 1.0.0 hooks ([c0efb1d](https://github.com/nuxt-community/pwa/commit/c0efb1d))
* add og:image support ([#30](https://github.com/nuxt-community/pwa/issues/30)) ([afebd96](https://github.com/nuxt-community/pwa/commit/afebd96))
* add oneSignal module ([bbc7b72](https://github.com/nuxt-community/pwa/commit/bbc7b72))
* **manifest:** allow overriding publicPath ([#19](https://github.com/nuxt-community/pwa/issues/19)) ([4e6782e](https://github.com/nuxt-community/pwa/commit/4e6782e))
* add option to register third-party sw ([#12](https://github.com/nuxt-community/pwa/issues/12)) ([9c0b61e](https://github.com/nuxt-community/pwa/commit/9c0b61e))
* **icon:** add combined option sources ([539430f](https://github.com/nuxt-community/pwa/commit/539430f))
* **manifest:** support crossorigin option ([#71](https://github.com/nuxt-community/pwa/issues/71)) ([ccb2c33](https://github.com/nuxt-community/pwa/commit/ccb2c33))
* **meta:** add author property ([#41](https://github.com/nuxt-community/pwa/issues/41)) ([cafcfc4](https://github.com/nuxt-community/pwa/commit/cafcfc4))
* **meta:** add nativeUI option ([3c7aa7d](https://github.com/nuxt-community/pwa/commit/3c7aa7d)), closes [#10](https://github.com/nuxt-community/pwa/issues/10)
* **meta:** add ogUrl url property ([#42](https://github.com/nuxt-community/pwa/issues/42)) ([3990ddf](https://github.com/nuxt-community/pwa/commit/3990ddf))
* **meta:** add property attribiture for og tags ([dc39fcb](https://github.com/nuxt-community/pwa/commit/dc39fcb))
* **meta:** add twitter card, site and creator properties ([#43](https://github.com/nuxt-community/pwa/issues/43)) ([fe11c76](https://github.com/nuxt-community/pwa/commit/fe11c76))
* **onesignal:** move init options under init ([dd61c18](https://github.com/nuxt-community/pwa/commit/dd61c18))
* **runtimeCaching:** Support runtimeCaching ([fdcda0f](https://github.com/nuxt-community/pwa/commit/fdcda0f))
* **worbox:** add offline option for making it optional ([#59](https://github.com/nuxt-community/pwa/issues/59)) ([76de33c](https://github.com/nuxt-community/pwa/commit/76de33c)), closes [#24](https://github.com/nuxt-community/pwa/issues/24)
* **workbox:** add options.autoRegister ([f1e1fe1](https://github.com/nuxt-community/pwa/commit/f1e1fe1))
* **workbox:** disable caching for sw.js by default ([e7677d8](https://github.com/nuxt-community/pwa/commit/e7677d8))
* **workbox:** expose registration as window.$sw ([a5ddf59](https://github.com/nuxt-community/pwa/commit/a5ddf59))
* **workbox:** importScripts option ([7c8644c](https://github.com/nuxt-community/pwa/commit/7c8644c))
* **workbox:** option to enable `skipWaiting` ([#80](https://github.com/nuxt-community/pwa/issues/80)) ([88cc602](https://github.com/nuxt-community/pwa/commit/88cc602))
* **workbox:** rewrite with better template support ([b0af84e](https://github.com/nuxt-community/pwa/commit/b0af84e))
* **workbox:** workbox 3 + offlinePage ([#60](https://github.com/nuxt-community/pwa/issues/60)) ([0fef874](https://github.com/nuxt-community/pwa/commit/0fef874))
* **workbox, onegisnal:** Use defaultsDeep for options ([5ac89cf](https://github.com/nuxt-community/pwa/commit/5ac89cf))
* Add support of StrategyOptions to cache ([b17bbd0](https://github.com/nuxt-community/pwa/commit/b17bbd0))
* ogSiteName ([#50](https://github.com/nuxt-community/pwa/issues/50)) ([0c99ab9](https://github.com/nuxt-community/pwa/commit/0c99ab9))

# Older changelogs

## Icon

<a name="2.5.0"></a>
# [2.5.0](https://github.com/nuxt-community/pwa-module/compare/v2.4.0...v2.5.0) (2018-09-02)


### Features

* **icon:** make icons accessible ([#51](https://github.com/nuxt-community/pwa-module/issues/51)) ([92bccd3](https://github.com/nuxt-community/pwa-module/commit/92bccd3))





<a name="2.4.0"></a>
# [2.4.0](https://github.com/nuxt-community/pwa-module/compare/v2.3.2...v2.4.0) (2018-08-28)


### Bug Fixes

* **icon:** temporary use jimp@0.3.4 ([#84](https://github.com/nuxt-community/pwa-module/issues/84)) ([3f0e718](https://github.com/nuxt-community/pwa-module/commit/3f0e718))





<a name="2.3.0"></a>
# 2.3.0 (2018-08-24)


### Bug Fixes

* **icon:** await on build ([e3c1be2](https://github.com/nuxt-community/pwa-module/commit/e3c1be2))
* **icon:** generate only on build ([9d68d70](https://github.com/nuxt-community/pwa-module/commit/9d68d70))
* workaround to fill meta with SPA and nuxt start ([a0fb908](https://github.com/nuxt-community/pwa-module/commit/a0fb908))


### Features

* Add compatibility for nuxt 1.0.0 hooks ([c0efb1d](https://github.com/nuxt-community/pwa-module/commit/c0efb1d))
* **icon:** add combined option sources ([539430f](https://github.com/nuxt-community/pwa-module/commit/539430f))





<a name="2.1.0"></a>
# [2.1.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/icon@2.0.2...@nuxtjs/icon@2.1.0) (2018-03-05)


### Features

* **icon:** add combined option sources ([539430f](https://github.com/nuxt-community/pwa-module/commit/539430f))





<a name="2.0.2"></a>
## [2.0.2](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/icon@2.0.1...@nuxtjs/icon@2.0.2) (2017-12-29)




**Note:** Version bump only for package @nuxtjs/icon

<a name="2.0.1"></a>
## [2.0.1](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/icon@2.0.0...@nuxtjs/icon@2.0.1) (2017-11-17)


### Bug Fixes

* workaround to fill meta with SPA and nuxt start ([a0fb908](https://github.com/nuxt-community/pwa-module/commit/a0fb908))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/icon@1.1.2...@nuxtjs/icon@2.0.0) (2017-11-16)


### Bug Fixes

* **icon:** await on build ([e3c1be2](https://github.com/nuxt-community/pwa-module/commit/e3c1be2))
* **icon:** generate only on build ([9d68d70](https://github.com/nuxt-community/pwa-module/commit/9d68d70))


### Features

* Add compatibility for nuxt 1.0.0 hooks ([c0efb1d](https://github.com/nuxt-community/pwa-module/commit/c0efb1d))




<a name="1.1.2"></a>
## 1.1.2 (2017-10-04)




**Note:** Version bump only for package @nuxtjs/icon

<a name="1.1.1"></a>
## 1.1.1 (2017-10-04)




**Note:** Version bump only for package @nuxtjs/icon

<a name="1.1.0"></a>
# [1.1.0](https://github.com/nuxt/modules/compare/@nuxtjs/icon@1.0.1...@nuxtjs/icon@1.1.0) (2017-09-21)


### Features

* **icon:** set minimum size to 64 ([5bd9460](https://github.com/nuxt/modules/commit/5bd9460))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/nuxt/modules/compare/@nuxtjs/icon@1.0.0...@nuxtjs/icon@1.0.1) (2017-08-02)




<a name="0.1.0"></a>
# 0.1.0 (2017-06-06)


### Bug Fixes

* **icon:** fix iconSrc type ([9aaaba7](https://github.com/nuxt/modules/commit/9aaaba7))


### Features

* 🖼️ icon module ([6201d2a](https://github.com/nuxt/modules/commit/6201d2a))

## Manifest

<a name="2.4.0"></a>
# [2.4.0](https://github.com/nuxt-community/pwa-module/compare/v2.3.2...v2.4.0) (2018-08-28)

**Note:** Version bump only for package @nuxtjs/manifest





<a name="2.3.0"></a>
# 2.3.0 (2018-08-24)


### Bug Fixes

* **docs:** add reference to pwa module ([49b7c49](https://github.com/nuxt-community/pwa-module/commit/49b7c49))
* **manifest:** run only on build ([ecaa835](https://github.com/nuxt-community/pwa-module/commit/ecaa835))
* workaround to fill meta with SPA and nuxt start ([a0fb908](https://github.com/nuxt-community/pwa-module/commit/a0fb908))


### Features

* Add compatibility for nuxt 1.0.0 hooks ([c0efb1d](https://github.com/nuxt-community/pwa-module/commit/c0efb1d))
* **manifest:** allow overriding publicPath ([#19](https://github.com/nuxt-community/pwa-module/issues/19)) ([4e6782e](https://github.com/nuxt-community/pwa-module/commit/4e6782e))
* **manifest:** support crossorigin option ([#71](https://github.com/nuxt-community/pwa-module/issues/71)) ([ccb2c33](https://github.com/nuxt-community/pwa-module/commit/ccb2c33))





<a name="2.1.0"></a>
# [2.1.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/manifest@2.0.1...@nuxtjs/manifest@2.1.0) (2017-12-07)


### Features

* **manifest:** allow overriding publicPath ([#19](https://github.com/nuxt-community/pwa-module/issues/19)) ([4e6782e](https://github.com/nuxt-community/pwa-module/commit/4e6782e))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/manifest@2.0.0...@nuxtjs/manifest@2.0.1) (2017-11-17)


### Bug Fixes

* workaround to fill meta with SPA and nuxt start ([a0fb908](https://github.com/nuxt-community/pwa-module/commit/a0fb908))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/manifest@1.7.2...@nuxtjs/manifest@2.0.0) (2017-11-16)


### Bug Fixes

* **manifest:** run only on build ([ecaa835](https://github.com/nuxt-community/pwa-module/commit/ecaa835))


### Features

* Add compatibility for nuxt 1.0.0 hooks ([c0efb1d](https://github.com/nuxt-community/pwa-module/commit/c0efb1d))




<a name="1.7.2"></a>
## 1.7.2 (2017-10-04)


### Bug Fixes

* **docs:** add reference to pwa module ([49b7c49](https://github.com/nuxt-community/pwa/commit/49b7c49))




<a name="1.7.1"></a>
## 1.7.1 (2017-10-04)




**Note:** Version bump only for package @nuxtjs/manifest

<a name="1.7.0"></a>
# [1.7.0](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.6.1...@nuxtjs/manifest@1.7.0) (2017-09-22)


### Features

* **manifest:** add standalone to start_url ([81dbe9c](https://github.com/nuxt/modules/commit/81dbe9c))




<a name="1.6.0"></a>
# [1.6.0](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.5.0...@nuxtjs/manifest@1.6.0) (2017-06-06)


### Bug Fixes

* **manifest:** correctly omit internal options ([47559b0](https://github.com/nuxt/modules/commit/47559b0))


### Features

* **manifest:** meta module compatibility ([8a41fda](https://github.com/nuxt/modules/commit/8a41fda))
* **manifest:** refactor & openGraph support ([0768246](https://github.com/nuxt/modules/commit/0768246))
* **manifest:** rewrite module ([352b4bf](https://github.com/nuxt/modules/commit/352b4bf))




<a name="1.5.0"></a>
# [1.5.0](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.4.2...@nuxtjs/manifest@1.5.0) (2017-06-05)


### Features

* **manifest:** defaultIcon option ([1086962](https://github.com/nuxt/modules/commit/1086962))




<a name="1.4.2"></a>
## [1.4.2](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.4.1...@nuxtjs/manifest@1.4.2) (2017-06-04)


### Bug Fixes

* prevent invalid url when router base is / ([f0fd863](https://github.com/nuxt/modules/commit/f0fd863))




<a name="1.4.1"></a>
## [1.4.1](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.4.0...@nuxtjs/manifest@1.4.1) (2017-06-04)


### Bug Fixes

* **manifest:** sanetize options ([b8497a0](https://github.com/nuxt/modules/commit/b8497a0))
* **manifest:** typo in manifest.json filename ([c2cabb6](https://github.com/nuxt/modules/commit/c2cabb6))




<a name="1.4.0"></a>
# [1.4.0](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.3.1...@nuxtjs/manifest@1.4.0) (2017-06-04)


### Features

* **manifest:** improvements ([cac9b4e](https://github.com/nuxt/modules/commit/cac9b4e))




<a name="1.3.1"></a>
## [1.3.1](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.3.0...@nuxtjs/manifest@1.3.1) (2017-06-02)


### Bug Fixes

* **manifest:** write manifest file once ([18aa015](https://github.com/nuxt/modules/commit/18aa015))




<a name="1.3.0"></a>
# [1.3.0](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.2.0...@nuxtjs/manifest@1.3.0) (2017-06-02)


### Features

* **manifest:** add lang ([bfdb96e](https://github.com/nuxt/modules/commit/bfdb96e))
* **manifest:** improve default short_name ([45b2bb2](https://github.com/nuxt/modules/commit/45b2bb2))




<a name="1.2.0"></a>
# [1.2.0](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.1.1...@nuxtjs/manifest@1.2.0) (2017-06-02)


### Features

* **meta:** add apple-touch-icon ([c74ffa4](https://github.com/nuxt/modules/commit/c74ffa4))




<a name="1.1.1"></a>
## [1.1.1](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.1.0...@nuxtjs/manifest@1.1.1) (2017-05-31)




<a name="1.1.0"></a>
# [1.1.0](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.0.1...@nuxtjs/manifest@1.1.0) (2017-05-30)


### Features

* **manifest:** Use loading as theme color as default ([cae4329](https://github.com/nuxt/modules/commit/cae4329))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/nuxt/modules/compare/@nuxtjs/manifest@1.0.0...@nuxtjs/manifest@1.0.1) (2017-05-29)




<a name="1.0.0"></a>
# 1.0.0 (2017-05-26)


### Features

* initial migration to 1.0.0-alpha1 ([05c1b7a](https://github.com/nuxt/modules/commit/05c1b7a))


### BREAKING CHANGES

* New modules system is backward incompatible with nuxt-helpers style modules




<a name="0.0.1"></a>
## 0.0.1 (2017-05-10)


## Meta

<a name="2.4.0"></a>
# [2.4.0](https://github.com/nuxt-community/pwa-module/compare/v2.3.2...v2.4.0) (2018-08-28)

**Note:** Version bump only for package @nuxtjs/meta





<a name="2.3.0"></a>
# 2.3.0 (2018-08-24)


### Bug Fixes

* **docs:** add reference to pwa module ([49b7c49](https://github.com/nuxt-community/pwa-module/commit/49b7c49))
* **meta:** add unique identifiers to meta fields ([#23](https://github.com/nuxt-community/pwa-module/issues/23)) ([76a1f89](https://github.com/nuxt-community/pwa-module/commit/76a1f89))
* **meta:** generate only on build ([1cace26](https://github.com/nuxt-community/pwa-module/commit/1cace26))
* **meta:** only set og:url when it has been defined through ogHost or options ([#44](https://github.com/nuxt-community/pwa-module/issues/44)) ([354f818](https://github.com/nuxt-community/pwa-module/commit/354f818))
* **meta:** remove minimal-ui from default viewport ([cf48b3f](https://github.com/nuxt-community/pwa-module/commit/cf48b3f)), closes [#10](https://github.com/nuxt-community/pwa-module/issues/10)
* don't override title when titleTemplate is provided  ([#48](https://github.com/nuxt-community/pwa-module/issues/48)) ([8c3f319](https://github.com/nuxt-community/pwa-module/commit/8c3f319))
* workaround to fill meta with SPA and nuxt start ([a0fb908](https://github.com/nuxt-community/pwa-module/commit/a0fb908))


### Features

* Add compatibility for nuxt 1.0.0 hooks ([c0efb1d](https://github.com/nuxt-community/pwa-module/commit/c0efb1d))
* add og:image support ([#30](https://github.com/nuxt-community/pwa-module/issues/30)) ([afebd96](https://github.com/nuxt-community/pwa-module/commit/afebd96))
* **meta:** add author property ([#41](https://github.com/nuxt-community/pwa-module/issues/41)) ([cafcfc4](https://github.com/nuxt-community/pwa-module/commit/cafcfc4))
* **meta:** add nativeUI option ([3c7aa7d](https://github.com/nuxt-community/pwa-module/commit/3c7aa7d)), closes [#10](https://github.com/nuxt-community/pwa-module/issues/10)
* **meta:** add ogUrl url property ([#42](https://github.com/nuxt-community/pwa-module/issues/42)) ([3990ddf](https://github.com/nuxt-community/pwa-module/commit/3990ddf))
* **meta:** add property attribiture for og tags ([dc39fcb](https://github.com/nuxt-community/pwa-module/commit/dc39fcb))
* **meta:** add twitter card, site and creator properties ([#43](https://github.com/nuxt-community/pwa-module/issues/43)) ([fe11c76](https://github.com/nuxt-community/pwa-module/commit/fe11c76))
* ogSiteName ([#50](https://github.com/nuxt-community/pwa-module/issues/50)) ([0c99ab9](https://github.com/nuxt-community/pwa-module/commit/0c99ab9))
* **workbox:** workbox 3 + offlinePage ([#60](https://github.com/nuxt-community/pwa-module/issues/60)) ([0fef874](https://github.com/nuxt-community/pwa-module/commit/0fef874))





<a name="2.2.1"></a>
## [2.2.1](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/meta@2.2.0...@nuxtjs/meta@2.2.1) (2018-03-08)


### Bug Fixes

* **meta:** only set og:url when it has been defined through ogHost or options ([#44](https://github.com/nuxt-community/pwa-module/issues/44)) ([354f818](https://github.com/nuxt-community/pwa-module/commit/354f818))





<a name="2.2.0"></a>
# [2.2.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/meta@2.1.0...@nuxtjs/meta@2.2.0) (2018-03-08)


### Features

* **meta:** add author property ([#41](https://github.com/nuxt-community/pwa-module/issues/41)) ([cafcfc4](https://github.com/nuxt-community/pwa-module/commit/cafcfc4))
* **meta:** add ogUrl url property ([#42](https://github.com/nuxt-community/pwa-module/issues/42)) ([3990ddf](https://github.com/nuxt-community/pwa-module/commit/3990ddf))
* **meta:** add twitter card, site and creator properties ([#43](https://github.com/nuxt-community/pwa-module/issues/43)) ([fe11c76](https://github.com/nuxt-community/pwa-module/commit/fe11c76))





<a name="2.1.0"></a>
# [2.1.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/meta@2.0.2...@nuxtjs/meta@2.1.0) (2018-03-05)


### Features

* add og:image support ([#30](https://github.com/nuxt-community/pwa-module/issues/30)) ([afebd96](https://github.com/nuxt-community/pwa-module/commit/afebd96))





<a name="2.0.2"></a>
## [2.0.2](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/meta@2.0.1...@nuxtjs/meta@2.0.2) (2017-12-29)


### Bug Fixes

* **meta:** add unique identifiers to meta fields ([#23](https://github.com/nuxt-community/pwa-module/issues/23)) ([76a1f89](https://github.com/nuxt-community/pwa-module/commit/76a1f89))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/meta@2.0.0...@nuxtjs/meta@2.0.1) (2017-11-17)


### Bug Fixes

* workaround to fill meta with SPA and nuxt start ([a0fb908](https://github.com/nuxt-community/pwa-module/commit/a0fb908))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/meta@1.5.3...@nuxtjs/meta@2.0.0) (2017-11-16)


### Bug Fixes

* **meta:** generate only on build ([1cace26](https://github.com/nuxt-community/pwa-module/commit/1cace26))
* **meta:** remove minimal-ui from default viewport ([cf48b3f](https://github.com/nuxt-community/pwa-module/commit/cf48b3f))


### Features

* **meta:** add nativeUI option ([3c7aa7d](https://github.com/nuxt-community/pwa-module/commit/3c7aa7d))
* Add compatibility for nuxt 1.0.0 hooks ([c0efb1d](https://github.com/nuxt-community/pwa-module/commit/c0efb1d))
* **meta:** add property attribiture for og tags ([dc39fcb](https://github.com/nuxt-community/pwa-module/commit/dc39fcb))




<a name="1.5.3"></a>
## 1.5.3 (2017-10-04)


### Bug Fixes

* **docs:** add reference to pwa module ([49b7c49](https://github.com/nuxt-community/pwa/commit/49b7c49))




<a name="1.5.2"></a>
## 1.5.2 (2017-10-04)




**Note:** Version bump only for package @nuxtjs/meta

<a name="1.5.1"></a>
## [1.5.1](https://github.com/nuxt/modules/compare/@nuxtjs/meta@1.5.0...@nuxtjs/meta@1.5.1) (2017-09-22)


### Bug Fixes

* **meta:** default apple-mobile-web-app-status-bar-style to default ([2535e08](https://github.com/nuxt/modules/commit/2535e08))




<a name="1.5.0"></a>
# [1.5.0](https://github.com/nuxt/modules/compare/@nuxtjs/meta@1.4.0...@nuxtjs/meta@1.5.0) (2017-09-21)


### Bug Fixes

* **meta:** default appleStatusBarStyle to black ([756d5cb](https://github.com/nuxt/modules/commit/756d5cb))


### Features

* **meta:** apple-touch-startup-image ([b98106c](https://github.com/nuxt/modules/commit/b98106c))
* **meta:** better IOS icons ([d76db2d](https://github.com/nuxt/modules/commit/d76db2d))
* **meta:** ios launch icon title ([e94e011](https://github.com/nuxt/modules/commit/e94e011))




<a name="1.4.0"></a>
# [1.4.0](https://github.com/nuxt/modules/compare/@nuxtjs/meta@1.3.0...@nuxtjs/meta@1.4.0) (2017-09-21)


### Features

* **meta:** ios specific options ([54a1435](https://github.com/nuxt/modules/commit/54a1435))




<a name="1.3.0"></a>
# [1.3.0](https://github.com/nuxt/modules/compare/@nuxtjs/meta@1.2.1...@nuxtjs/meta@1.3.0) (2017-07-20)


### Features

* **icon:** applefavicon option (#76) ([280b416](https://github.com/nuxt/modules/commit/280b416))




<a name="1.2.0"></a>
# [1.2.0](https://github.com/nuxt/modules/compare/@nuxtjs/meta@1.1.0...@nuxtjs/meta@1.2.0) (2017-06-06)


### Features

* **meta:** Support manifest meta & openGraph ([17b7db1](https://github.com/nuxt/modules/commit/17b7db1))




<a name="1.1.0"></a>
# [1.1.0](https://github.com/nuxt/modules/compare/@nuxtjs/meta@1.0.1...@nuxtjs/meta@1.1.0) (2017-06-02)


### Features

* **meta:** more meta tags ([a4e3a04](https://github.com/nuxt/modules/commit/a4e3a04))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/nuxt/modules/compare/@nuxtjs/meta@1.0.0...@nuxtjs/meta@1.0.1) (2017-05-29)


### Bug Fixes

* **meta:** add missing head keyword ([758cccd](https://github.com/nuxt/modules/commit/758cccd))
* **meta:** fix package.json ([4e395cf](https://github.com/nuxt/modules/commit/4e395cf))




<a name="1.0.0"></a>
# 1.0.0 (2017-05-26)


### Features

* initial migration to 1.0.0-alpha1 ([05c1b7a](https://github.com/nuxt/modules/commit/05c1b7a))


### BREAKING CHANGES

* New modules system is backward incompatible with nuxt-helpers style modules




<a name="0.0.1"></a>
## 0.0.1 (2017-05-10)

## One signal

<a name="2.4.0"></a>
# [2.4.0](https://github.com/nuxt-community/pwa-module/compare/v2.3.2...v2.4.0) (2018-08-28)

**Note:** Version bump only for package @nuxtjs/onesignal





<a name="2.0.0"></a>
# 2.0.0 (2017-11-17)


### Features

* add oneSignal module ([bbc7b72](https://github.com/nuxt-community/pwa-module/commit/bbc7b72))
* **onesignal:** move init options under init ([dd61c18](https://github.com/nuxt-community/pwa-module/commit/dd61c18))
* **workbox, onegisnal:** Use defaultsDeep for options ([5ac89cf](https://github.com/nuxt-community/pwa-module/commit/5ac89cf))

## Workbox

<a name="2.4.0"></a>
# [2.4.0](https://github.com/nuxt-community/pwa-module/compare/v2.3.2...v2.4.0) (2018-08-28)


### Bug Fixes

* **workbox:** infer default value of globDirectory from webpack config. fixes [#83](https://github.com/nuxt-community/pwa-module/issues/83). ([c7102fd](https://github.com/nuxt-community/pwa-module/commit/c7102fd))
* **workbox:** more fixes regarding nuxt 2 dist directory changes. fixes [#83](https://github.com/nuxt-community/pwa-module/issues/83). ([7a8bb3b](https://github.com/nuxt-community/pwa-module/commit/7a8bb3b))


### Features

* **worbox:** offlineAssets ([#86](https://github.com/nuxt-community/pwa-module/issues/86)) ([27c8fa1](https://github.com/nuxt-community/pwa-module/commit/27c8fa1))
* **workbox:** offline page assets ([#85](https://github.com/nuxt-community/pwa-module/issues/85)) ([8bc4a3b](https://github.com/nuxt-community/pwa-module/commit/8bc4a3b))





<a name="2.3.2"></a>
# 2.3.2 (2018-08-24)

### Bug Fixes

* **workbox:** `staleWhileRevalidate()` -> `networkOnly()` for offline pages ([832d60f](https://github.com/nuxt-community/pwa-module/commit/832d60f))


<a name="2.3.1"></a>
# 2.3.1 (2018-08-24)

### Bug Fixes

* **workbox:** `offlinePage` syntax error ([af21d74](https://github.com/nuxt-community/pwa-module/commit/af21d74))


<a name="2.3.0"></a>
# 2.3.0 (2018-08-24)


### Bug Fixes

* **docs:** add reference to pwa module ([49b7c49](https://github.com/nuxt-community/pwa-module/commit/49b7c49))
* **workbox:** faster service worker register ([07524a2](https://github.com/nuxt-community/pwa-module/commit/07524a2))
* **workbox:** hardcoded `static` dir ([#73](https://github.com/nuxt-community/pwa-module/issues/73)) ([6d241ec](https://github.com/nuxt-community/pwa-module/commit/6d241ec))
* **workbox:** make cacheId independent of npm package version ([b744a27](https://github.com/nuxt-community/pwa-module/commit/b744a27))
* **workbox:** use regexp for runtimeCaching. fixes [#14](https://github.com/nuxt-community/pwa-module/issues/14). ([f384103](https://github.com/nuxt-community/pwa-module/commit/f384103))


### Features

* Add compatibility for nuxt 1.0.0 hooks ([c0efb1d](https://github.com/nuxt-community/pwa-module/commit/c0efb1d))
* **workbox, onegisnal:** Use defaultsDeep for options ([5ac89cf](https://github.com/nuxt-community/pwa-module/commit/5ac89cf))
* add option to register third-party sw ([#12](https://github.com/nuxt-community/pwa-module/issues/12)) ([9c0b61e](https://github.com/nuxt-community/pwa-module/commit/9c0b61e))
* **runtimeCaching:** Support runtimeCaching ([fdcda0f](https://github.com/nuxt-community/pwa-module/commit/fdcda0f))
* Add support of StrategyOptions to cache ([b17bbd0](https://github.com/nuxt-community/pwa-module/commit/b17bbd0))
* **worbox:** add offline option for making it optional ([#59](https://github.com/nuxt-community/pwa-module/issues/59)) ([76de33c](https://github.com/nuxt-community/pwa-module/commit/76de33c)), closes [#24](https://github.com/nuxt-community/pwa-module/issues/24)
* **workbox:** add options.autoRegister ([f1e1fe1](https://github.com/nuxt-community/pwa-module/commit/f1e1fe1))
* **workbox:** disable caching for sw.js by default ([e7677d8](https://github.com/nuxt-community/pwa-module/commit/e7677d8))
* **workbox:** expose registration as window.$sw ([a5ddf59](https://github.com/nuxt-community/pwa-module/commit/a5ddf59))
* **workbox:** importScripts option ([7c8644c](https://github.com/nuxt-community/pwa-module/commit/7c8644c))
* **workbox:** option to enable `skipWaiting` ([#80](https://github.com/nuxt-community/pwa-module/issues/80)) ([88cc602](https://github.com/nuxt-community/pwa-module/commit/88cc602))
* **workbox:** rewrite with better template support ([b0af84e](https://github.com/nuxt-community/pwa-module/commit/b0af84e))
* **workbox:** workbox 3 + offlinePage ([#60](https://github.com/nuxt-community/pwa-module/issues/60)) ([0fef874](https://github.com/nuxt-community/pwa-module/commit/0fef874))





<a name="2.2.0"></a>
# [2.2.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/workbox@2.1.1...@nuxtjs/workbox@2.2.0) (2018-03-05)


### Features

* Add support of StrategyOptions to cache ([b17bbd0](https://github.com/nuxt-community/pwa-module/commit/b17bbd0))





<a name="2.1.1"></a>
## [2.1.1](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/workbox@2.1.0...@nuxtjs/workbox@2.1.1) (2017-11-27)




**Note:** Version bump only for package @nuxtjs/workbox

<a name="2.1.0"></a>
# [2.1.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/workbox@2.0.1...@nuxtjs/workbox@2.1.0) (2017-11-17)


### Bug Fixes

* **workbox:** faster service worker register ([07524a2](https://github.com/nuxt-community/pwa-module/commit/07524a2))


### Features

* **runtimeCaching:** Support runtimeCaching ([fdcda0f](https://github.com/nuxt-community/pwa-module/commit/fdcda0f))
* **workbox:** add options.autoRegister ([f1e1fe1](https://github.com/nuxt-community/pwa-module/commit/f1e1fe1))
* **workbox, onegisnal:** Use defaultsDeep for options ([5ac89cf](https://github.com/nuxt-community/pwa-module/commit/5ac89cf))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/workbox@2.0.0...@nuxtjs/workbox@2.0.1) (2017-11-17)


### Bug Fixes

* **workbox:** make cacheId independent of npm package version ([b744a27](https://github.com/nuxt-community/pwa-module/commit/b744a27))
* **workbox:** use regexp for runtimeCaching. fixes [#14](https://github.com/nuxt-community/pwa-module/issues/14). ([f384103](https://github.com/nuxt-community/pwa-module/commit/f384103))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/nuxt-community/pwa-module/compare/@nuxtjs/workbox@1.2.2...@nuxtjs/workbox@2.0.0) (2017-11-16)


### Features

* Add compatibility for nuxt 1.0.0 hooks ([c0efb1d](https://github.com/nuxt-community/pwa-module/commit/c0efb1d))
* add option to register third-party sw ([#12](https://github.com/nuxt-community/pwa-module/issues/12)) ([9c0b61e](https://github.com/nuxt-community/pwa-module/commit/9c0b61e))
* **workbox:** expose registration as window.$sw ([a5ddf59](https://github.com/nuxt-community/pwa-module/commit/a5ddf59))
* **workbox:** importScripts option ([7c8644c](https://github.com/nuxt-community/pwa-module/commit/7c8644c))
* **workbox:** rewrite with better template support ([b0af84e](https://github.com/nuxt-community/pwa-module/commit/b0af84e))




<a name="1.2.2"></a>
## 1.2.2 (2017-10-04)


### Bug Fixes

* **docs:** add reference to pwa module ([49b7c49](https://github.com/nuxt-community/pwa/commit/49b7c49))




<a name="1.2.1"></a>
## 1.2.1 (2017-10-04)




**Note:** Version bump only for package @nuxtjs/workbox

<a name="1.2.0"></a>
# [1.2.0](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@1.1.6...@nuxtjs/workbox@1.2.0) (2017-08-16)


### Features

* **workbox:** use nuxt tapables ([4c52955](https://github.com/nuxt/modules/commit/4c52955))




<a name="1.1.6"></a>
## [1.1.6](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@1.1.5...@nuxtjs/workbox@1.1.6) (2017-08-11)


### Bug Fixes

* **workbox:** fix globDirectory ([db6588f](https://github.com/nuxt/modules/commit/db6588f))




<a name="1.1.5"></a>
## [1.1.5](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@1.1.4...@nuxtjs/workbox@1.1.5) (2017-08-11)


### Bug Fixes

* **workbox:** explicitly provide globDirectory ([6c4f984](https://github.com/nuxt/modules/commit/6c4f984))




<a name="1.1.4"></a>
## [1.1.4](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@1.1.3...@nuxtjs/workbox@1.1.4) (2017-08-06)


### Bug Fixes

* **workbox:** correct serviceworker check (#109) ([53897f1](https://github.com/nuxt/modules/commit/53897f1))




<a name="1.1.3"></a>
## [1.1.3](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@1.1.2...@nuxtjs/workbox@1.1.3) (2017-08-02)


### Bug Fixes

* **workbox:** only cach css and js files ([42e3edb](https://github.com/nuxt/modules/commit/42e3edb))




<a name="1.1.2"></a>
## [1.1.2](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@1.1.1...@nuxtjs/workbox@1.1.2) (2017-07-31)




<a name="1.1.1"></a>
## [1.1.1](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@1.1.0...@nuxtjs/workbox@1.1.1) (2017-07-19)


### Bug Fixes

* **workbox:** don't use regexs ([19502d9](https://github.com/nuxt/modules/commit/19502d9))




<a name="1.1.0"></a>
# [1.1.0](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@1.0.1...@nuxtjs/workbox@1.1.0) (2017-07-19)


### Features

* **workbox:** enable clientsClaim by default ([f7001ad](https://github.com/nuxt/modules/commit/f7001ad))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@1.0.0...@nuxtjs/workbox@1.0.1) (2017-07-19)


### Bug Fixes

* **workbox:** update modifyUrlPrefix for latest workbox (#75) ([93e3b66](https://github.com/nuxt/modules/commit/93e3b66)), closes [#75](https://github.com/nuxt/modules/issues/75)




<a name="0.4.0"></a>
# [0.4.0](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@0.3.4...@nuxtjs/workbox@0.4.0) (2017-06-06)


### Features

* **workbox:** simplify publicPath & routerBase ([ab1cb77](https://github.com/nuxt/modules/commit/ab1cb77))




<a name="0.3.4"></a>
## [0.3.4](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@0.3.3...@nuxtjs/workbox@0.3.4) (2017-06-05)


### Bug Fixes

* **workbox:** incorrect swURL when routerBase is / ([efbd90e](https://github.com/nuxt/modules/commit/efbd90e))




<a name="0.3.3"></a>
## [0.3.3](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@0.3.2...@nuxtjs/workbox@0.3.3) (2017-06-04)


### Performance Improvements

* **workbox:** use default options ([946546f](https://github.com/nuxt/modules/commit/946546f))




<a name="0.3.2"></a>
## [0.3.2](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@0.3.1...@nuxtjs/workbox@0.3.2) (2017-06-04)


### Bug Fixes

* **workbox:** empty scope ([50326e9](https://github.com/nuxt/modules/commit/50326e9))




<a name="0.3.1"></a>
## [0.3.1](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@0.3.0...@nuxtjs/workbox@0.3.1) (2017-06-04)


### Bug Fixes

* prevent invalid url when router base is / ([f0fd863](https://github.com/nuxt/modules/commit/f0fd863))




<a name="0.3.0"></a>
# [0.3.0](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@0.2.0...@nuxtjs/workbox@0.3.0) (2017-06-04)


### Features

* **workbox:** full offline support ([9ee7f8f](https://github.com/nuxt/modules/commit/9ee7f8f))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/nuxt/modules/compare/@nuxtjs/workbox@0.1.0...@nuxtjs/workbox@0.2.0) (2017-06-02)


### Features

* **workbox:** improve service worker ([445a1c2](https://github.com/nuxt/modules/commit/445a1c2))




<a name="0.1.0"></a>
# 0.1.0 (2017-06-02)


### Features

* workbox ([3d919c3](https://github.com/nuxt/modules/commit/3d919c3))
