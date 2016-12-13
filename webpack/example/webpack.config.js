var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
    ?   [
            './ui/js/index.js'
        ]
    :   [
            './ui/js/index.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8000'
        ];

var plugins = PRODUCTION
    ?   [
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin('style-[contenthash:10].css'),
            new HTMLWebpackPlugin({
                template: './ui/index-template.html'
            })
        ]
    :   [
            new webpack.HotModuleReplacementPlugin()
        ];
plugins.push(
    new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(DEVELOPMENT),
        PRODUCTION: JSON.stringify(PRODUCTION)
    })
);

var cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';
var cssLoader = PRODUCTION
    ?   ExtractTextPlugin.extract({
            loader: 'css-loader?minimize&localIdentName=' + cssIdentifier
        })
    :   ['style-loader', 'css-loader?localIdentName=' + cssIdentifier];

var sourceMap = PRODUCTION ? '' : 'source-map';

module.exports = {
    devtool: sourceMap,
    entry: entry,
    plugins: plugins,
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: PRODUCTION ? '/' : '/',
        filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
    },
    devServer: {
        // contentBase: 'dist',
        watchContentBase: true,
        lazy: false
    },
    module: {
        loaders: [{
        //     test: /\.js$/,
        //     loaders: ['babel-loader'],
        //     exclude: /node_modules/
        // }, {
        //     test: /\.(png|jpg|gif)$/,
        //     loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
        //     exclude: /node_modules/
        // }, {
            test: /\.css$/,
            loaders: cssLoader,
            exclude: '/node_modules/'
        // }, {
        //     test: /\.html$/,
        //     loaders: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader',
        //     exclude: '/node_modules/'
        }]
    }
};
