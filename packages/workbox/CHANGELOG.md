# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0-beta.14](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.13...v3.0.0-beta.14) (2019-03-17)


### Features

* **workbox:** make plugin fully asynchronous ([1eb1190](https://github.com/nuxt-community/pwa-module/commit/1eb1190))
* improve computed cacheId ([cd6c9cc](https://github.com/nuxt-community/pwa-module/commit/cd6c9cc))
* improve sw.register error handling ([9aa76f8](https://github.com/nuxt-community/pwa-module/commit/9aa76f8))





# [3.0.0-beta.13](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.12...v3.0.0-beta.13) (2019-03-17)


### Features

* **workbox:** improve sw.register ([c35f610](https://github.com/nuxt-community/pwa-module/commit/c35f610))
* sync workbox version with workbox-window ([9a3632a](https://github.com/nuxt-community/pwa-module/commit/9a3632a))





# [3.0.0-beta.12](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2019-03-05)

**Note:** Version bump only for package @nuxtjs/workbox





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

**Note:** Version bump only for package @nuxtjs/workbox





# [3.0.0-beta.8](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2019-02-18)

**Note:** Version bump only for package @nuxtjs/workbox





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


### Features

* options.dev ([fb0d38c](https://github.com/nuxt-community/pwa-module/commit/fb0d38c))





# [3.0.0-beta.2](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2019-02-07)


### Features

* offlineAnalytics ([#55](https://github.com/nuxt-community/pwa-module/issues/55)) ([4c4d3ff](https://github.com/nuxt-community/pwa-module/commit/4c4d3ff))
* workboxExtensions and extension reading fixes ([5c56484](https://github.com/nuxt-community/pwa-module/commit/5c56484))





# [3.0.0-beta.1](https://github.com/nuxt-community/pwa-module/compare/v3.0.0-beta.0...v3.0.0-beta.1) (2019-02-07)


### Features

* use better regexes ([318228e](https://github.com/nuxt-community/pwa-module/commit/318228e))





# [3.0.0-beta.0](https://github.com/nuxt-community/pwa-module/compare/v2.6.0...v3.0.0-beta.0) (2019-02-04)


### Bug Fixes

* routing order for default offline route (/.*). it must be last order ([#100](https://github.com/nuxt-community/pwa-module/issues/100)) ([1c829d0](https://github.com/nuxt-community/pwa-module/commit/1c829d0))


### chore

* only support nuxt.hook ([854d826](https://github.com/nuxt-community/pwa-module/commit/854d826))


### Features

* rewrite workbox ([#122](https://github.com/nuxt-community/pwa-module/issues/122)) ([9e49896](https://github.com/nuxt-community/pwa-module/commit/9e49896))
* **workbox:** change the order of default runtimeCache ([#106](https://github.com/nuxt-community/pwa-module/issues/106)) ([033b504](https://github.com/nuxt-community/pwa-module/commit/033b504))


### BREAKING CHANGES

* needs nuxt 2.x or later





<a name="2.6.0"></a>
# [2.6.0](https://github.com/nuxt-community/pwa-module/compare/v2.5.0...v2.6.0) (2018-09-21)


### Bug Fixes

* **workbox:** add missing lodash dependency ([#91](https://github.com/nuxt-community/pwa-module/issues/91)) ([da2c36f](https://github.com/nuxt-community/pwa-module/commit/da2c36f))


### Features

* **workbox:** support pass config object to `workbox.setConfig` ([#95](https://github.com/nuxt-community/pwa-module/issues/95)) ([b5dab8a](https://github.com/nuxt-community/pwa-module/commit/b5dab8a))
