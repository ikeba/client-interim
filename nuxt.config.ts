// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },
  head: {
    meta: [
      { name: 'viewport', content: 'initial-scale=1,user-scalable=no,width=device-width' },
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/eslint-module', '@nuxt/image-edge', '@nuxt/content'],
  css: ['@/assets/css/main.css'],
  build: {
    // @ts-ignore
    postcss: {
      // eslint-disable-next-line import/extensions
      postcssOptions: require('./postcss.config.js'),
    },
  },
  image: {
    // Options
  },
});
