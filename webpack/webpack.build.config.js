const commonConfig = require('./webpack.common.config');
const WebpackMerge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = function(options) {
  const config = WebpackMerge(commonConfig(), {
    mode: "production",

    plugins: [
      new BundleAnalyzerPlugin(),
      new OptimizeCSSAssetsPlugin(),
      new UglifyJsPlugin(),
      new CleanWebpackPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          }
        }
      },
      runtimeChunk: {
        name: entrypoint => `runtime.${entrypoint.name}`
      }
    }
  });

  return config;
};