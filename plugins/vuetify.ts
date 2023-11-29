import { createVuetify } from 'vuetify'
//@ts-ignore
import * as components from 'vuetify/lib/components'
// @ts-ignore
import * as directives from 'vuetify/lib/directives'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives
    })
    app.vueApp.use(vuetify)
})