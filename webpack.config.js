const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpackMerge = require("webpack-merge")
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "development", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {filename: "bundle.js"},
      plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
}
