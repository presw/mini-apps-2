module.exports = {
  entry: './client/Index.jsx',
  output: {
    path: `${__dirname}/public/`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ]
  }
}
