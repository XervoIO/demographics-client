const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Path = require('path')
const Webpack = require('webpack')

const ROOT_PATH = Path.resolve(__dirname)

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-hot-middleware/client')
  }

  return sources
}

var basePlugins = [
  new Webpack.DefinePlugin({
    __DEVELOPMENT__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production'
  }),
  new HtmlWebpackPlugin({
    template: './client/templates/index.html',
    inject: 'body'
  }),
 new ExtractTextPlugin('css/styles.css')
]

var devPlugins = [
  new Webpack.HotModuleReplacementPlugin(),
  new Webpack.NoErrorsPlugin()
]

var prodPlugins = [
  new Webpack.optimize.OccurenceOrderPlugin(),
  new Webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
]

const PLUGINS = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : [])

module.exports = {
  entry: {
    app: getEntrySources(['./client/Routes'])
  },
  output: {
    path: Path.resolve(ROOT_PATH, 'public'),
    filename: 'js/app.[hash].js',
    publicPath: '/',
    sourceMapFilename: 'js/app.[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  devtool: 'source-map',
  plugins: PLUGINS,
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map' }
    ],
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'file?name=images/[name].[ext]' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
      { test: /\.(eot|ttf|woff)$/, loader: 'file?name=font/[name].[ext]' }
    ]
  }
}
