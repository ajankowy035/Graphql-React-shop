const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: './client/src/index.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js|jsx$/,
                exclude: /node_module/
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx|ts|tsx)$/i,
                loader:'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/src/index.html'
        })
    ]
};