var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/js/main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        include: [
          path.resolve(__dirname, 'src/js'),
        ]
      },
      {
        test: /\.scss?$/,
        loaders: [ 'style', 'css', 'sass' ],
        include: [
          path.resolve(__dirname, 'src/css'),
        ]
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./src/js'),
    ],
    extensions: ['', '.js', '.jsx', '.scss'],
  }
};
