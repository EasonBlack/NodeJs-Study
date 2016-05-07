var path = require('path');

module.exports = {
    entry: "./client.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    resolve: {
        alias: {com:  path.resolve( __dirname, './components' )}
        //root : [  path.resolve('./components')   ]
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
}