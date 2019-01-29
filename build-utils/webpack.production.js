const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[ext]',
              outputPath: path.resolve(__dirname, 'images')
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 1 * 1024,
              noquotes: true,
              name: '[name].[ext]',
              outputPath: path.resolve(__dirname, 'images')
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js$/,
        sourceMap: true,
        exclude: /node_modules/
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
  devtool: 'source-map'
})
