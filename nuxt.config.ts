export default defineNuxtConfig({
  hooks: {
    'pages:extend'(pages) {
      // add a route
      pages.push({
        name: 'MainScreen',
        path: '/',
        file: '~/pages/Main.vue'
      })
    }
  },
  devtools: { enabled: false, ssr: false},
  modules:['@pinia/nuxt'],
  css:["vuetify/styles/main.css"],
  build: {
    transpile: ['vuetify'],
  },
})
