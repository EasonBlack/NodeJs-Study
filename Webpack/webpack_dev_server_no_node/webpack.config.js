

var path = require("path");

module.exports = {
    entry: {
        app: [
            "./src/index.js",
        ]
    },
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js',
        publicPath: '/static/'
    }
};

// var path = require('path');
// module.exports = {
//     entry: [
//         'webpack-dev-server/client?http://localhost:8080',
//         './src/index.js'
//     ],
//     output: {
//         path: path.join(__dirname, 'static/'),
//         publicPath: '/static/',
//         filename: 'bundle.js'
//     },
//     plugins: [],
//     module: {
//         loaders: [{
//             test: /\.js$/,
//             loaders: ['babel'],
//             include: path.join(__dirname, 'src')
//         }]
//     }
// };