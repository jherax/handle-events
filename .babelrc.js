// https://babeljs.io/docs/en/v7-migration
module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        "corejs": false,
        "helpers": true,
        "regenerator": false,
        "useESModules": true
      }
    ]
  ],
  ignore: ['node_modules']
};
