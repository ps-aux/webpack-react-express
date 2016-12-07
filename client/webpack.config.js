const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    watch: true,
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        hot: true
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
        ]
    }
};
