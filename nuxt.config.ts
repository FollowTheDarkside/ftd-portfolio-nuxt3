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
                { hid: 'description', name: 'description', content: 'FTD Portfolio' },
                { hid: 'og:url', property: 'og:url', content: 'https://followthedarkside.com/' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'FOLLOW THE DARKSIDE' },
                { hid: 'og:title', property: 'og:title', content: 'Follow The Darkside' },
                { hid: 'og:description', property: 'og:description', content: 'FTD Portfolio' },
                { hid: 'og:image', property: 'og:image', content: 'https://followthedarkside.com/image/about/ftd-mirror.jpg' },
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:title', content: 'FOLLOW THE DARKSIDE' },
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' },
                // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sen&display=swap' }
            ],
        },
    },
})
