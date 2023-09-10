// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'nuxt-swiper', '@nuxtjs/i18n', '@invictus.codes/nuxt-vuetify'],
    i18n: {
        vueI18n: './i18n.config.ts'
    },
    css: ['~/assets/scss/index.scss']
});
