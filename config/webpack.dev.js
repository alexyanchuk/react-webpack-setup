const { merge } = require("webpack-merge");
const webpack = require("webpack");
const config = require("./webpack.config.js");

module.exports = merge(config, {
    context: __dirname,
    mode: "development",
    devtool: "inline-source-map",
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: `${__dirname}/../dist`,
        open: true,
        clientLogLevel: "silent",
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.module\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: [/\.module.(s(a|c)ss)$/, /node_modules/],
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
});
