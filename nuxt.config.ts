// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ssr: true,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],
    css: [
        '/assets/css/style.css',
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        head: {
            htmlAttrs: {
                "data-theme": "lofi",
              },
          title: 'FOLLOW THE DARKSIDE',
          meta: [{ name: 'description', content: 'FTD Portfolio' }],
          link: [
            { rel: 'icon', href: '/favicon.ico' },
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sen&display=swap' }
            ],
        },
    },
})
