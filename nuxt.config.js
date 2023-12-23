import colors from 'vuetify/es5/util/colors'
import ru from 'vuetify/es5/locale/ru'

export default {
    // Disable SSR
    ssr: false,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        htmlAttrs: {
            lang: 'ru-RU',
            translate: 'no',
        },
        titleTemplate: 'ЕВРАЗ | АРМ диспетчера ЖД-станции',
        title: 'ЕВРАЗ | АРМ диспетчера ЖД-станции',
        meta: [
            { charset: 'utf-8' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/config.scss'
    ],

    // Правила Robots.txt
    robots: {
        UserAgent: '*',
        Disallow: '/admin/',
        Sitemap: '/sitemap.xml'
    },

    // Настройки карты сайта
    sitemap: {
        hostname: (process.env.HOST || `http://localhost`),
        gzip: true,
        exclude: [
            '/admin/**',
            '/manager/**'
        ],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@plugins/v-axios.js'},
        { src: '@plugins/v-mask.js'},
        { src: '@plugins/v-masonry', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        '~/components',
        { path: '~/components/Interface', extensions: ['vue'] },
        { path: '~/components/Operation', extensions: ['vue'] },
        { path: '~/components/Authenticate', extensions: ['vue'] },
        { path: '~/components/Station', extensions: ['vue'] },
        { path: '~/components/Board', extensions: ['vue'] },
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/moment',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://auth.nuxtjs.org/
        '@nuxtjs/auth-next',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://www.npmjs.com/package/@nuxtjs/yandex-metrika
        '@nuxtjs/yandex-metrika',
        // https://www.npmjs.com/package/@nuxtjs/robots
        '@nuxtjs/robots',
        // https://github.com/Maronato/vue-toastification
        "vue-toastification/nuxt",
        // https://sitemap.nuxtjs.org/
        '@nuxtjs/sitemap',
    ],

    // Конфигурация momentjs
    moment: {
        defaultLocale: 'ru',
        locales: ['ru']
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: (process.env.URL || 'http://localhost') + '/api/v1/'
    },

    // Auth Options
    auth: {
        redirect: {
            login: "/auth/signin",
            logout: "/",
            home: "/",
            // callback: "/login",
        },
        strategies: {
            local: {
                token: {
                    property: 'data.access_token',
                    type: 'Bearer'
                },
                user: {
                    property: 'data'
                },
                endpoints: {
                    login:  { url: 'user/login',  method: 'post' },
                    user:   { url: 'user/me',     method: 'post' },
                    logout: { url: 'user/logout', method: 'post' },
                },
                tokenRequired: true,
            }
        }
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'ru'
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        // https://theme-generator.vuetifyjs.com/
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: '#f07b1a',//colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: '#F3F3F3',//colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: '#E2251D',//colors.deepOrange.accent4,
                    success: '#297E37',//colors.green.accent3
                }
            }
        },
        lang: {
            locales: { ru },
            current: 'ru'
        }
    },

    publicRuntimeConfig: {
        externalBaseUrl: process.env.URL_EXTERNAL,
        yandexMetrika: {
            id: process.env.YANDEX_METRIKA_ID,
            webvisor: true,
            clickmap: true,
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
