var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      './assets/js/index'
    ],
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: "[name]-[hash].js",
        publicPath: 'http://localhost:3001/assets/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
        new BundleTracker({filename: './webpack-stats.json'}),
    ],

    module: {
      loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: ['react-hot-loader','babel-loader'] }
      ]
    },
};