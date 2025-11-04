// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        typeCheck: true,
        shim: false
    },
    css: ['~/assets/css/tailwind.css'],
    runtimeConfig: {
        public: {
            statusEndpoint: process.env.NUXT_PUBLIC_STATUS_ENDPOINT || 'https://status.shindoclient.com/api/summary',
            downloadUrl: process.env.NUXT_PUBLIC_DOWNLOAD_URL || 'https://github.com/ShindoClient/Shindo-Client/releases/latest',
            discordUrl: process.env.NUXT_PUBLIC_DISCORD_URL || 'https://shindoclient.com/discord'
        }
    },
    app: {
        head: {
            title: 'ShindoClient',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content:
                        'Download ShindoClient, a modern AAA-level Minecraft 1.8.9 client with competitive performance, security updates and cross-platform support.'
                },
                {
                    name: 'keywords',
                    content:
                        'minecraft client, pvp client, 1.8.9 client, minecraft mod, shindo client, lunar alternative, feather alternative, labymod alternative, minecraft enhancement'
                },
                { name: 'author', content: 'ShindoClient' },
                { name: 'robots', content: 'index, follow' },
                { name: 'theme-color', content: '#5a3ef7' },

                // Open Graph
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'ShindoClient — Competitive 1.8.9 Minecraft Client' },
                {
                    property: 'og:description',
                    content:
                        'Experience ShindoClient: pro-grade performance tweaks, modular UI and secure authentication for competitive Minecraft.'
                },
                { property: 'og:image', content: '/embed.png' },
                { property: 'og:image:alt', content: 'ShindoClient Showcase' },
                { property: 'og:url', content: 'https://shindoclient.com' },
                { property: 'og:site_name', content: 'ShindoClient' },

                // Twitter
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@ShindoClient' },
                { name: 'twitter:title', content: 'ShindoClient — Modern Minecraft Client' },
                {
                    name: 'twitter:description',
                    content:
                        'Performance tuned, AAA inspired design and seamless account sync. Elevate your Minecraft PvP with ShindoClient.'
                },
                { name: 'twitter:image', content: '/embed.png' },

                // Google
                { name: 'google-site-verification', content: 'n2_PSPIFSW3FK0lF6RLzFS1Yk-m3fJBrBriWdK449Xk' },
                { name: 'google-adsense-account', content: 'ca-pub-6946729640389049' }
            ],
            link: [
                { rel: 'canonical', href: 'https://shindoclient.com' },
                { rel: 'icon', type: 'image/png', href: '/logo.png' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Outfit:wght@500;600;700&display=swap'
                }
            ]
        }
    }
})
