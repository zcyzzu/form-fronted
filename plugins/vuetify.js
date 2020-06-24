// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#456789',
                offblack: '#333333',
            },
            dark: {},
        },
    },
})