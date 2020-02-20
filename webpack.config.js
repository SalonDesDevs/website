const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV === 'production'
        ? 'production'
        : 'development',
    entry: {
        main: ['whatwg-fetch', 'particles.js', './src/main.js'],
        articles: './articles/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    esModule: false
                }
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.md$/,
                use: ['html-loader', 'markdown-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
    },
    performance: {
        hints: false
    },
    plugins: [
        new (require("vue-loader/lib/plugin"))
    ],
    devtool: '#eval-source-map'
};

