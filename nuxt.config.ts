// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/eslint-module'],
  css: ['@/assets/css/main.css'],
  build: {
    // @ts-ignore
    postcss: {
      // eslint-disable-next-line import/extensions
      postcssOptions: require('./postcss.config.js'),
    },
  },
});
