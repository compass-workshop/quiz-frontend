// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
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
  

  //call to localhost:3001/api/hello which is another server
 
})
