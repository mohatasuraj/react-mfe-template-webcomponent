const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                      comments: false,
                    },
                    compress: {
                      drop_console: true,
                    },
                  }
            })
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../public')
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env'],
                plugins: [
                    "@babel/plugin-proposal-class-properties"
                ]
            }
        }, {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000'
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader?url=false', 'sass-loader'],
        },
        ]
    },
    resolve: {
        extensions:['.js', '.jsx'],
        "alias": {
            "react": "preact/compat",
            "react-dom/test-utils": "preact/test-utils",
            "react-dom": "preact/compat", // Must be below test-utils
            "react/jsx-runtime": "preact/jsx-runtime"
        },
    },
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        compress: true,
        port: 8001
    }
};
