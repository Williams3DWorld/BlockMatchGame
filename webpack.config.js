const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },

    plugins: [
        new CopyPlugin([
            { from: './assets', to: path.resolve(__dirname, 'dist/assets')},
        ]),
        new HtmlWebpackPlugin({
            title: 'Index template',
            template: './src/index.html'
        })
    ],
    node: {
        fs: 'empty'
    },
    performance: {
        hints: false
    },
    //mode: "development"
    mode: "production"
};
