module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/recommended',
    'standard',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-prototype-builtins': 'off',
    'space-before-function-paren': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-v-html': 'off',
  },
}
