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
        'indent': ['error', 'tab', { 'SwitchCase': 1 }],
        'quotes': ['error', 'single'],
        'semi': ['warn', 'always'],
        'no-unused-vars': ['warn'],
        'eol-last': ['error', 'always'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-dangle': ['warn', 'always-multiline'],
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'space-infix-ops': ['error', {'int32Hint': false}],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'curly': 'error',
    },
};
