const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", // from webpack 4 src/index.js is taken as default entry point

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
        use: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
