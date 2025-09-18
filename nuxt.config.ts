// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        typeCheck: true,
        shim: false
    },
    app: {
        head: {
            title: 'ShindoClient',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},

                // Primary
                {
                    name: 'description',
                    content:
                        'Download ShindoClient, the ultimate open-source Minecraft 1.8.9 PvP client. Cross-platform support for Windows, macOS, and Linux with quality of life improvements and bug fixes.'
                },
                {
                    name: 'keywords',
                    content:
                        'minecraft client, pvp client, 1.8.9 client, minecraft mod, soar client alternative, cross platform minecraft, open source minecraft client, minecraft pvp, ShindoClient download, minecraft enhancement'
                },
                {name: 'author', content: 'ShindoClient'},
                {name: 'robots', content: 'index, follow'},
                {name: 'language', content: 'English'},
                {name: 'revisit-after', content: '7 days'},
                {name: 'revised', content: '2025-08-03'},

                // Open Graph
                {property: 'og:type', content: 'website'},
                {
                    property: 'og:title',
                    content: 'ShindoClient - Modern 1.8.9 Minecraft Client'
                },
                {
                    property: 'og:description',
                    content:
                        'The ultimate open-source Minecraft 1.8.9 PvP client with cross-platform support and quality of life improvements. Download now for Windows, macOS, and Linux.'
                },
                {property: 'og:image', content: '/embed.png'},
                {
                    property: 'og:image:alt',
                    content: 'ShindoClient Logo - Minecraft PvP Client'
                },
                {property: 'og:url', content: 'https://shindoclient.com'},
                {property: 'og:site_name', content: 'ShindoClient'},
                {property: 'og:locale', content: 'en_GB'},

                // Twitter
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:site', content: '@ShindoClient'},
                {name: 'twitter:creator', content: 'ShindoClient'},
                {
                    name: 'twitter:title',
                    content: 'ShindoClient - Modern Minecraft 1.8.9 PvP Client'
                },
                {
                    name: 'twitter:description',
                    content:
                        'The ultimate open-source Minecraft 1.8.9 PvP client with cross-platform support and quality of life improvements.'
                },
                {name: 'twitter:image', content: '/embed.png'},
                {
                    name: 'twitter:image:alt',
                    content: 'ShindoClient Logo - Minecraft PvP Client'
                },

                // Colors
                {name: 'theme-color', content: '#6603fc'},
                {name: 'msapplication-TileColor', content: '#6603fc'},
                {name: 'msapplication-navbutton-color', content: '#6603fc'},
                {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},

                // Google
                {
                    name: 'google-site-verification',
                    content: 'n2_PSPIFSW3FK0lF6RLzFS1Yk-m3fJBrBriWdK449Xk'
                },
                {name: 'google-adsense-account', content: 'ca-pub-6946729640389049'}
            ],
            link: [
                {rel: 'canonical', href: 'https://shindoclient.com'},
                {rel: 'icon', type: 'image/png', href: '/logo.png'},
                {
                    rel: 'preconnect', href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;700;900&display=swap'
                }
            ]
        }
    }
})
