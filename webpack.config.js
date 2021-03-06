/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-12 14:34:59
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-03-19 17:09:41
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(), // 浏览器免刷新
    ],
    devServer: {
        port: 10010,
        open: true,
        // hot: true,
        stats: {
            colors: true, // 输出不同的颜色
            preset: 'minimal',
        },
        host: '0.0.0.0',
        useLocalIp: true, // 使浏览器可以使用的本地IP打开
        historyApiFallback: true, // 解决所有的 404， 页面刷新报错问题 请求都会响应 index.html 的内容的问题
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.react.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                // 通用资源类型
                type: 'asset', // webpack5 新增处理资源模块的一个内容，不需要 loader
                // 现在，webpack 将按照默认条件，自动地在 resource 和 inline 之间进行选择:
                // 小于 8kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类
                // 自定义设置
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024, // 小于 8*1024 转 base64
                    },
                },
            },
        ],
    },
    optimization: {
        usedExports: true, // 使用查找的方式查看模块哪个使用了
        minimize: true, // 开启压缩
        splitChunks: { chunks: 'all' }, // 代码拆分
    },
    cache: {
        type: 'filesystem', // 记录打包过的内容，通过文件缓存的方式保存到本地磁盘
    },
};
