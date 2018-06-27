const path = require('path');
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
    entry: './src/index.js',
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // },
    devServer: {
        inline: true,
        contentBase: __dirname + "/dist",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./dist/index.html",
            filename: "./index.html"
        })
    ]
};
module.exports = config;