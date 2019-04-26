/* global process */

const webpack = require('webpack');
const { resolve } = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonClientConfig = require('./common.webpack');

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'module.rules') {
      const testList = b.map(item => item.test.toString());
      return a
        .filter(item => !testList.includes(item.test.toString()))
        .concat(b);
    }
  }
})(commonClientConfig, {
  entry: { main: ['babel-polyfill', './index.prod.tsx'] },
  mode: 'production',
  devtool: false,
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].min.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: 'src-[path]___[name]__[local]'
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles/[name].css`
    }),
    new webpack.SourceMapDevToolPlugin({
      exclude: /node_modules/,
      columns: true,
      test: /\.tsx?|\.ts?|\.js?$/,
      filename: 'js/[name].[chunkhash].js.map'
    })
  ]
});
