# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.


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
