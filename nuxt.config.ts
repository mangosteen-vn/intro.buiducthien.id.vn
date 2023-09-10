// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {

        title: 'Thương hiệu thời trang hàng đầu thế giới',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },

            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: 'Thương hiệu thời trang hàng đầu thế giới hiện nay' }
        ]
    },
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', 'nuxt-swiper', '@nuxtjs/i18n', '@invictus.codes/nuxt-vuetify'],
    i18n: {
        vueI18n: './i18n.config.ts'
    },
    css: ['~/assets/scss/index.scss']
});
