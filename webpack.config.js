const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');
const common = require('./webpack/webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common,{
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                SPACE: JSON.stringify('dev'),
            },
        }),
        new Dotenv(),
    ],
    mode: 'development',
});