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
  runtimeConfig: {
    public: {
      base_url: process.env.API_BASE_URL || 'http://35.87.151.247:3000',
    }
  },
  

  //call to localhost:3001/api/hello which is another server
 
})
