// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],
  gtag: {
    id: 'G-VS77H278N4'
  },
  app: {
    head: {
      meta: [
        {
          name:'impact-site-verification',
          content: '3e1dce80-7864-4a07-82a2-593e299ab0e4'
        },
        {
          name:'impact-site-verification',
          content: 'f4dfb430-55ce-4d02-8bfc-1eb4d0948cd7'
        },
      ]
    }
  }
})
