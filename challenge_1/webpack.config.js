const path = require('path');

module.exports = {
  entry: './client/Index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react' ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};
