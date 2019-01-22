const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "development", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      entry: ["@babel/polyfill", "./src/index.js"],
      output: {filename: "bundle.js"},
      plugins: [new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
}
