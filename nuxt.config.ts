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
      proxy:{
        '/api':{
          target:'http://localhost:3001',
          changeOrigin:true,
          rewrite:(path:any)=>path.replace(/^\/api/,'')
        }
      }
      
    }
    
  },
  

  //call to localhost:3001/api/hello which is another server
 
})
