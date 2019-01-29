const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env) // eslint-disable-line global-require
const presetConfig = require('./build-utils/loadPresets')

module.exports = ({ mode, presets } = { mode: 'development', presets: [] }) =>
  webpackMerge(
    {
      mode,
      entry: ['@babel/polyfill', './src/App.jsx'],
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },

      module: {
        rules: [
          {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        }),
        new Dotenv({
          defaults: true,
          safe: true
        }),
        new webpack.DefinePlugin({
          'process.env.APP_VERSION': JSON.stringify(
            process.env.npm_package_version
          ),
          'process.env.APP_KEY': JSON.stringify(process.env.APP_KEY)
        })
      ],
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        hot: true
      }
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
