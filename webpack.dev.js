const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
const webpack = require('webpack');

module.exports = merge(config, {
    context: __dirname,
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: __dirname + "/dist",
        open: true,
        clientLogLevel: 'silent',
        port: 3000,
        hot: true
    },
})
