module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'airbnb-base',
        'plugin:vue/recommended',
        'plugin:import/typescript',
    ],
    plugins: ['@typescript-eslint', 'vue', 'import'],
    rules: {
        "global-require": "off",
        "vue/multi-word-component-names": "off",
        "quotes": ["error", "single"],
        "max-len": 'off',
        "import/no-extraneous-dependencies": 'off',
    },
}
