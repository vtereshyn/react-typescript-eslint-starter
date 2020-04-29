/* global process */
require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  mode: 'development',
  context: resolve(__dirname, '../src'),
  entry: ['babel-polyfill', '../src/index.dev.tsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: [
          'react-hot-loader/webpack',
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: 'src-[path]___[name]__[local]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['svgo-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: ['file-loader?name=fonts/[name].[ext]']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'assets/img',
        to: 'assets/img'
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inlineSource: 'runtime~.+\\.js',
      chunksSortMode: 'none'
    }),
    new InlineSourcePlugin(HtmlWebpackPlugin),
    new webpack.NamedModulesPlugin()
  ]
};
