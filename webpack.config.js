const webpack = require('webpack')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/dev-server',
        "./app/app.js",
    ],

    output: {
        path: __dirname + "/dist",
        filename: "app.js",
    },

    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["react-hot", "babel-loader"],
        },
        {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
        },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        ],
    devServer:   {
        hot:true,
        contentBase: './dist'
    }
}
