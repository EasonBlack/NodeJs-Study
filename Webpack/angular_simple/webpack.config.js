module.exports = {
    entry: "./app.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!less"
            }
        ]
    }
}