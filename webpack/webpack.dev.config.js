var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'webapp', 'src', 'app.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            }
        ]
    },
    output: {
        path: path.join(parentDir, '/webapp/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(parentDir, 'webapp'),
        historyApiFallback: true
    }
}