module.exports = {
    entry: "./main.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
}