const path = require('path');

module.exports = {
  entry: {
  	demo: './demo/demo.init.js',
  	main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};