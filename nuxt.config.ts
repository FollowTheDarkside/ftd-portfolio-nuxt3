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
                lang: 'ja',
                prefix: 'og: https://ogp.me/ns#',
            },
            title: 'FOLLOW THE DARKSIDE',
            meta: [
                { name: 'description', content: 'FTD Portfolio' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'FOLLOW THE DARKSIDE' },
                { property: 'og:image', content: '/public/image/about/ftd-mirror.jpg', },
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' },
                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sen&display=swap' }
            ],
        },
    },
})
