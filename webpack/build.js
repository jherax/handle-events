const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { version } = require('../package.json');
const PATHS = require('./paths');

const banner = `handle-events@v${version}. Jherax 2019. Visit https://github.com/jherax/handle-events`;
// https://webpack.js.org/guides/environment-variables/
// const PROD = 'production'; // development, none

module.exports = (env = 'none') => {
  const config = {
    mode: env,
    entry: {
      'handle-events': PATHS.source.js,
    },
    output: {
      path: PATHS.dist.folder,
      filename: '[name].js',
      umdNamedDefine: false,
      library: PATHS.libraryName,
      // https://webpack.js.org/configuration/output/#output-libraryexport
      libraryExport: 'default',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: PATHS.source.folder,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: PATHS.source.folder,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          enforce: 'pre',
          options: {
            // https://github.com/MoOx/eslint-loader
            // configFile: '.eslintrc.js',
            failOnWarning: false,
            failOnError: true,
          },
        },
      ],
    },
    optimization: {
      minimizer: [
        // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
        new UglifyJsPlugin({
          test: /\.js($|\?)/i,
          parallel: true,
          // cache: true,
          uglifyOptions: {
            // https://github.com/mishoo/UglifyJS2#compress-options
            compress: {
              dead_code: true,
              drop_debugger: true,
              drop_console: true,
              toplevel: true,
            },
            mangle: true,
            warnings: true,
          },
        }),
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: true,
        verbose: true,
      }),
      new webpack.BannerPlugin({ banner, raw: false, entryOnly: true }),
    ],
  };

  return config;
};
