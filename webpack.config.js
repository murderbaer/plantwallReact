const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/, // <-- added `|jsx` here
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    // pass all js files through Babel
    resolve: {
        extensions: ['*', '.js', '.jsx'], // <-- added `.jsx` here
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        historyApiFallback: true,
        port: 3000,
    },
};
