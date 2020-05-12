const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const infoHtmlWebpackPlugin = [
    {
        //favicon: paths.src + '/images/favicon.png',
        template: paths.src + '/index.html',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,
        },
    },
  ]

  module.exports = infoHtmlWebpackPlugin.map((html) => new HtmlWebpackPlugin(html));