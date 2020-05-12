const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('./HtmlWebpackPlugin');

const config = {
  entry: [paths.src + '/index.js'],
  output: {
      path: paths.build,
      filename: '[name].bundle.js',
      publicPath: '/',
  },
  plugins: [new CleanWebpackPlugin(), ...HtmlWebpackPlugin],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:  /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
            context: 'src', // prevent display of src/ in filename
        },
      },
      {
      test: /\.(woff(2)?|eot|ttf|otf|)$/,
      loader: 'url-loader',
      options: {
          limit: 8192,
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
        },
      },
    ]
  }
}

module.exports = config;