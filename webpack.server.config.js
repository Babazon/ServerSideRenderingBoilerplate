const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const config = {
  target: 'node',
  entry: './src/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      _CLIENT_: false,
      _SERVER_: true,
    }),
  ],
};

module.exports = merge(baseConfig, config);
