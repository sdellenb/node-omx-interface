module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: '2018',
    },
    extends: [
        'eslint:recommended',
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4, { "SwitchCase": 1 }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'eol-last': ['error', 'always'],
        'comma-dangle': ['warn', 'always-multiline'],
        'no-tabs': ['error', { allowIndentationTabs: true }],
    },
};
