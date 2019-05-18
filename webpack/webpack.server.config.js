const webpack = require('webpack')
const commonConfig = require('./webpack.common.config');
const WebpackMerge = require('webpack-merge');

module.exports = function(options) {
  const config = WebpackMerge(commonConfig(), {
    mode: "development",

    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
      port: 3000,
      hot: true
    }
  });

  return config;
};