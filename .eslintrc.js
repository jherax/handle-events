module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    codeFrame: true,
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'valid-jsdoc': [
      1,
      {
        requireParamDescription: true,
        requireReturnDescription: false,
        requireReturnType: true,
        requireReturn: false,
        prefer: { return: 'returns' },
      },
    ],
    'require-jsdoc': [
      2,
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
    'one-var': [2, { uninitialized: 'always' }],
    'prefer-const': [
      1,
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-param-reassign': 0,
    // 'operator-linebreak': ['error', 'before'],
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'import/no-mutable-exports': 1,
    'import/prefer-default-export': 1,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
