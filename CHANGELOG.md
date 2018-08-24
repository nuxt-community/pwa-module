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
