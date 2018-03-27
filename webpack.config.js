const path = require('path');
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
        'presets': [['env', { 'targets': { 'node': 4 } }]]
      }
    }]
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};