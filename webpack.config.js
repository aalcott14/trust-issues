const path = require('path');

module.exports = {
  entry: './client/src/app.jsx',
  output: {
    path: path.join(__dirname, './client/dist/'),
    filename: 'bundle.js',
    publicPath: './dist/',
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
        test: /\.(png|jpg)$/,
        loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  watch: true,
};
