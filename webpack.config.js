const path = require('path');

module.exports = {
  context: path.join(__dirname, './client'),
  entry: './src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
};
