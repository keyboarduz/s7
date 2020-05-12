const paths = require('./paths');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    'sass-loader',
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: paths.src.pages,
        watchContentBase: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    plugins: [new webpack.HotModuleReplacementPlugin()],
});