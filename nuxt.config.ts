// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/style/styles.css"],
  app: {
   head: {
    title: "Agus Sulaiman Slicing",
    meta: [
      {
        name: "Deskripsi",
        content: "Belajar Nuxt dan Tailwindcss",
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
      }
    ]
   } 
  }
})