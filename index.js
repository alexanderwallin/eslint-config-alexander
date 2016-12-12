module.exports = {
  extends: ['xo'],
  plugins: ['import'],
  rules: {
    'arrow-parens': 0,
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'no-use-before-define': 0,
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': 0,
    'radix': ['error', 'as-needed'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error',  {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],

    // import
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-dynamic-require': 'error',

    'import/export': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-deprecated': 'warn',

    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'error',
    'import/newline-after-import': 'error',
  }
}