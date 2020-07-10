// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        'no-console': 'off',
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
}
