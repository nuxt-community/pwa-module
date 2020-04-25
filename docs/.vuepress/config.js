module.exports = {
  title: '⚡ Nuxt PWA',
  description: 'Supercharge Nuxt with a heavily tested, updated and stable PWA solution',
  themeConfig: {
    algolia: {
      apiKey: '0226f37644ef2eaccb45814b7b906ec2',
      indexName: 'nuxtjs_pwa'
    },
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
            'manifest'
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
        link: 'https://github.com/nuxt-community/onesignal-module'
      },
    ]
  }
}
