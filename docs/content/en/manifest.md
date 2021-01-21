---
title: Manifest Module
description: Manifest adds Web App Manifest with no pain
position: 4
category: Modules
---

Manifest adds [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) with no pain.

You can pass options to `pwa.manifest` in `nuxt.config.js` to override defaults. Check the
[valid options](https://developer.mozilla.org/en-US/docs/Web/Manifest#Members) available and and its
[default options](#default-options) for deeper insights.

```js{}[nuxt.config.js]
pwa: {
  manifest: {
    name: 'My Awesome App',
    lang: 'fa',
    useWebmanifestExtension: false
  }
}
```

## Default options

| Property                                 | Type            | Default                                                      | Description                                                     |
| ---------------------------------------- | --------------- | ------------------------------------------------------------ | --------------------------------------------------------------- |
| `name` <sup>\*1</sup>                    | `String`        | `package.json`'s name property                               | [maximum of 45 characters]                                      |
| `short_name` <sup>\*1</sup>              | `String`        | `package.json`'s name property                               | [maximum of 12 characters]                                      |
| `description` <sup>\*2</sup>             | `String`        | `package.json`'s description property                        |                                                                 |
| `icons` <sup>\*1</sup>                   | `Array<Object>` | `[]`                                                         | (See the [icon module])                                         |
| `start_url` <sup>\*1</sup>               | `String`        | `routerBase + '?standalone=true'`                            | It has to be relative to where the manifest is placed           |
| `display` <sup>\*1</sup>                 | `String`        | `'standalone'`                                               |                                                                 |
| `background_color` <sup>\*2</sup>        | `String`        | `'#ffffff'`                                                  |                                                                 |
| `theme_color` <sup>\*2</sup>             | `String`        | `'#ffffff'`                                                  | This module's meta theme-color (see the [meta module])          |
| `dir`                                    | `String`        | `'ltr'`                                                      | `ltr` or `rtl`. Used with `lang`                                |
| `lang`                                   | `String`        | `'en'`                                                       | Recommended if used `dir`                                       |
| `useWebmanifestExtension` <sup>\*3</sup> | `Boolean`       | `false`                                                      | Whether to use `webmanifest` file extension (or default `json`) |
| `publicPath`                             | `String`        | A combination of `routerBase` and `options.build.publicPath` |                                                                 |

- <sup>\*1</sup> Mandatory (according [to Google](https://web.dev/add-manifest)).
  Although [official documentation](https://w3c.github.io/manifest/#json-schema) only mentions `name` and `icons`
- <sup>\*2</sup> Recommended (according [to Google](https://web.dev/add-manifest))
- <sup>\*3</sup> Please see [wiki](https://github.com/nuxt-community/pwa-module/wiki/.webmanifest)

[icon module]: https://pwa.nuxtjs.org/icon
[meta module]: https://pwa.nuxtjs.org/meta
[maximum of 45 characters]: https://developer.chrome.com/apps/manifest/name
[maximum of 12 characters]: https://developer.chrome.com/apps/manifest/name
[loading color]: https://nuxtjs.org/api/configuration-loading/#customizing-the-progress-bar

For more information, check out:

- the spec: https://w3c.github.io/manifest/
- Pete LePage's article: https://web.dev/add-manifest/
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/Manifest

## Difference between `name` and `short_name`:

### `name`

> The name (maximum of 45 characters) is the primary identifier of the app and is a required field. It is displayed in the following locations:
>
> - Install dialog
> - Extension management UI
> - Chrome Web Store

Source: https://developer.chrome.com/apps/manifest/name

### `short_name`

> The short_name (maximum of 12 characters recommended) is a short version of the app's name. It is an optional field and if not specified, the name will be used, > though it will likely be truncated. The short name is typically used where there is insufficient space to display the full name, such as:
>
> - Device home screens
> - New Tab page

Source: https://developer.chrome.com/apps/manifest/name

## `useWebmanifestExtension`:

This options sets the manifest file extension to `.json` or `.webmanifest`. For more information, check
[this wiki page](https://github.com/nuxt-community/pwa-module/wiki/.webmanifest).
