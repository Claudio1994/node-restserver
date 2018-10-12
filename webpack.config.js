const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname,'src','public','js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}