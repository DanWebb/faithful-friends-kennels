const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/scripts/index.js',
    output: {
        path: __dirname + '/assets',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: __dirname + '/scripts',
                loader: 'babel-loader',
                query: {
                  presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
