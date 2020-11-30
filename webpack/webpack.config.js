const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                    loader: "style-loader", // creates style nodes from JS strings
                },
                {
                    loader: "css-loader", // translates CSS into CommonJS
                },
                {
                    loader: "less-loader", // compiles Less to CSS
                },
            ],
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }],
    },
};