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
        "useESModules": false
      }
    ]
  ],
  ignore: ['node_modules']
};
