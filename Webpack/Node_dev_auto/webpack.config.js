var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        "./source/main.js"
    ],
    output: {
        path: require("path").resolve("./build"),
        filename: "bundle.js",
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}