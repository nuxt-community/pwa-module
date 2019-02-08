module.exports = {
  title: '⚡ Nuxt PWA',
  description: 'Supercharge Nuxt with a heavily tested, updated and stable PWA solution',
  themeConfig: {
    repo: 'nuxt-community/pwa-module',
    editLinks: true,
    docsDir: 'docs',
    sidebar: {
      '/modules/': [
        {
          title: 'Modules',
          collapsable: false,
          children: [
            'workbox',
            'meta',
            'icon',
            'manifest',
            'onesignal'
          ]
        }
      ]
    },
    nav: [
      {
        text: 'Get started',
        link: '/setup'
      },
      {
        text: 'Workbox',
        link: '/modules/workbox'
      },
      {
        text: 'Meta',
        link: '/modules/meta'
      },
      {
        text: 'Icon',
        link: '/modules/icon'
      },
      {
        text: 'Manifest',
        link: '/modules/manifest'
      },
      {
        text: 'OneSignal',
        link: '/modules/onesignal'
      },
    ]
  }
}
