const path = require('path');

module.exports = {
  entry: './client/src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/dist/'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  watch: true,
};
