const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(options) {
  const config = {
    resolve: {
      extensions: [".js", ".jsx", ".less"],
      alias: {
        '@': path.resolve(__dirname, "../src"),
        'components': path.resolve(__dirname, "../src/components"),
        'pages': path.resolve(__dirname, "../src/pages")
      }
    },

    entry: {
      index: path.resolve(__dirname, "../src/index.js")
    },

    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "[name].js",
      chunkFilename: "[name].js"
    },

    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }, {
        test: /\.(css|less)$/,
        use: [{
          loader: CssExtractPlugin.loader
        }, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader"
        }, {
          loader: "less-loader"
        }]
      }, {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 8000
        }
      }]
    },

    plugins: [
      new CssExtractPlugin({
        filename: "style.css",
        chunkFilename: "[name].css"
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "../src/statics/template.html"),
        inject: true
      })
    ]
  };

  return config;
};
