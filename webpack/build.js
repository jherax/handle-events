const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {version} = require('../package.json');
const PATHS = require('./paths');

const banner = `handle-events@v${version}. Jherax 2017. Visit https://github.com/jherax/handle-events`;
// https://webpack.js.org/guides/environment-variables/
const PROD = 'production'; // development, none

module.exports = (env = 'none') => {
  const config = {
    mode: env,
    entry: {
      'handle-events': PATHS.source.js,
      'handle-events.min': PATHS.source.js,
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
            configFile: '.eslintrc.json',
            failOnWarning: false,
            failOnError: true,
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin([PATHS.dist.folder], {
        root: PATHS.project,
        verbose: true,
      }),
      new webpack.BannerPlugin({banner, raw: false, entryOnly: true}),
    ],
  };

  if (env !== PROD) {
    const minified = /\.min.js($|\?)/i;
    // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
    const uglifyJsPlugin = new UglifyJsPlugin({
      test: minified,
      sourceMap: true, // map error message locations to modules
      uglifyOptions: {
        // https://github.com/mishoo/UglifyJS2#compress-options
        compress: {
          warnings: true,
          dead_code: true,
          drop_debugger: true,
          drop_console: true,
        },
      },
    });
    // https://webpack.js.org/plugins/source-map-dev-tool-plugin/
    const sourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin({
      test: minified,
      filename: '[name].map',
      // loaders generate SourceMaps and the source code is used
      module: true,
    });

    config.plugins.push(uglifyJsPlugin, sourceMapDevToolPlugin);
  }

  return config;
};
