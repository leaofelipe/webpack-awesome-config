const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env) // eslint-disable-line global-require
const presetConfig = require('./build-utils/loadPresets')

module.exports = ({ mode, presets } = { mode: 'development', presets: [] }) =>
  webpackMerge(
    {
      mode,
      entry: ['@babel/polyfill', './src/index.js'],
      output: { filename: 'bundle.js' },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
              name: 'style/[name].[ext]'
            }
          }
        ]
      },
      plugins: [new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
