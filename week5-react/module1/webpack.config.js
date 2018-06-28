const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015'],
              plugins: ['transform-class-properties'],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
module.exports = config;
