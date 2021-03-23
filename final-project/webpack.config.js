const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = process.env.NODE_ENV || 'development';
// require("babel-core/register");
// const polyfill = require("babel-polyfill");
module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
    ],

    devtool: "source-map",

    mode: ENV,

    optimization: {
        minimize: ENV === 'production',
    },

    devServer: {

        contentBase: resolve(__dirname, 'dist'),
        contentBasePublicPath: "/",

        compress: false,
        port: 9000
    },
};