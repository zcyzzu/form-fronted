import colors from 'vuetify/es5/util/colors'

export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'spa',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: "云导师",
        meta: [{
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "帮助您提升学术写作能力，积累专业经验和技能。如果你想向代写说不，又担心自己完成不了学术论文，云导师将带你迈出第一步"
            }
        ],
        link: [{
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            },
            {
                rel: "stylesheet",
                href: "https://fonts.loli.net/icon?family=Material+Icons"
            },
            {
                rel: "stylesheet",
                href: "https://cdn.staticfile.org/MaterialDesign-Webfont/4.1.95/css/materialdesignicons.min.css"
            }
        ]
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [{
            src: "@/plugins/app-data.js",
            mode: "client"
        },
        {
            src: "@/plugins/base.js",
            mode: "client"
        },
        // {
        //     src: "@/plugins/meta.js",
        //     mode: "client"
        // },
        {
            src: "@/plugins/webfontloader.js",
            mode: "client"
        }
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        defaultAssets: {
            font: false,
            icons: false
        },
        // theme: {
        //     dark: false,
        //     themes: {
        //         dark: {
        //             primary: colors.red.darken2,
        //             accent: colors.grey.darken3,
        //             secondary: colors.amber.darken3,
        //             info: colors.teal.lighten1,
        //             warning: colors.amber.base,
        //             error: colors.deepOrange.accent4,
        //             success: colors.green.accent3
        //         }
        //     }
        // },
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: "#1976D2",
                    offblack: "#333333"
                },
                dark: {}
            }
        }
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {}
}