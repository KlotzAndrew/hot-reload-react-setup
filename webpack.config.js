var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: {
      javascript: "./app.js",
      html: "./index.html",
    },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"],
    },
    {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    },
    {
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      }
    },
  ],
},
}