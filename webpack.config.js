const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.jsx',
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
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

        new Dotenv(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        historyApiFallback: true,
        port: 3000,
    },
};
