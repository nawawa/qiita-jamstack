import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {

  // 環境変数
  privateRuntimeConfig: {
    apiURL: process.env.API_URL,
    apiSecret: process.env.API_SECRET
  },
  publicRuntimeConfig: {
    apiURL: process.env.NODE_ENV !== 'production' ? process.env.API_URL : '',
    apiSecret: process.env.NODE_ENV !== 'production' ? process.env.API_SECRET : ''
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/articles/page/:p',
        component: resolve(__dirname, 'pages/articles/index.vue'),
        name: 'page',
      })
    },
  },

  generate: {
    fallback: true, // 不明なパスへのアクセス時もNuxtコンポーネントで解決
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'nawawa',
    title: 'nawawa',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  target:'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/common.scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true
      },
      dark: true,
      themes: {
        dark: {
          background: `#353D58`,
          primary: `#6383A9`,
          accent: `#586694`,
          secondary: `#9D7D66`,
          info: `#56A597`,
          warning: `#B6B480`,
          error: `#AB7878`,
          success: `#539164`
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
