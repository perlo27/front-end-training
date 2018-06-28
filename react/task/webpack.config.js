var config = {
      entry: '/src/main.js',

      output: {
        path: '/src',
        filename: 'index.js'
      },

      devServer: {
        inline: true,
        port: 7777
      },

      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
    }

    module.exports = config;
