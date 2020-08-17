import theme from '@nuxt/content-theme-docs'

export default theme({
  loading: { color: '#5A0FC8' },
  buildModules: ['nuxt-ackee'],
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: 'a2998bc2-56dd-47fa-9d94-9781411bd1f9',
    detailed: true
  }
})
