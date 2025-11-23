import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    typescript: {
        typeCheck: true,
        strict: true,
    },
    app: {
        head: {
            htmlAttrs: { lang: 'ru' },
            title: 'Книжний магазин | Читай город',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content:
                        'width=device-width,initial-scale=1.0 maximum-scale=1, minimum-scale=1, user-scalable=no',
                },
                {
                    name: 'description',
                    content: 'Книжний магазин | Читай город',
                },
                {
                    name: 'mobile-web-app-capable',
                    content: 'yes',
                },
                {
                    name: 'apple-mobile-web-app-status-bar-style',
                    content: 'black-translucent',
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'og:title',
                    content: 'Книжний магазин | Читай город',
                },
                {
                    property: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    property: 'og:description',
                    content: 'Книжний магазин | Читай город',
                },
                {
                    property: 'og:image',
                    content: '/og-image.webp',
                },
                {
                    property: 'og:image:width',
                    content: '300',
                },
                {
                    property: 'og:image:height',
                    content: '200',
                },
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
                },
            ],
        },
    },
    css: ['@/assets/sass/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [
                        '@use "@/assets/sass/variables" as *;',
                        '@use "@/assets/sass/mixins" as *;',
                    ].join(''),
                },
            },
        },
    },
    modules: ['@pinia/nuxt', 'nuxt-swiper'],
    imports: {
        dirs: ['./composables/**', './types/**', './stores/**'],
    },
});
