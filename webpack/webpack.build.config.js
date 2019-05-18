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
        minSize: 30000, // 模块的最小体积
        minChunks: 1, // 模块的最小被引用次数
        maxAsyncRequests: 5, // 按需加载的最大并行请求数
        maxInitialRequests: 3, // 一个入口最大并行请求数
        automaticNameDelimiter: '~', // 文件名的连接符
        name: true,
        cacheGroups: { // 缓存组
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