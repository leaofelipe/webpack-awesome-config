module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: 'url-loader' }]
      }
    ]
  },
  devtool: 'inline-source-map'
})
