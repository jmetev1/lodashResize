const path = require('path');
const LodashPlugin = require('lodash-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    'loaders': [{
      'loader': 'babel-loader',
      'test': /\.js$/,
      'exclude': /node_modules/,
      'query': {
        'plugins': ['lodash'],
        'presets': [['env', { 'targets': { 'node': 4 } }]]
      }
    }]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new LodashPlugin({
    })
  ]
};