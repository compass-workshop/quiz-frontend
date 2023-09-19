// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000,
  },
  devtools: { enabled: false },
  modules:['@nuxtjs/tailwindcss'],
  //ssr is true by default and we can change it to false
  ssr:false,
  vite: {
    server: {
      fs: {
        strict: false
      },
    }
  },
})
