const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        // 输出目录为当前目录下的dist目录
        path: path.resolve(__dirname, 'dist'),
        // 输出文件名
        filename: 'index.js'
    },
    // 为了方便调试，配置一下调试工具
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts','.tsx','.js','.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                // 使用sourcemap调试
                // enforce:pre表示这个loader要在别的loader执行前执行
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        // 这个插件生成html
        new HtmlWebpackPlugin({
            // 以哪个文件为模板，模板路径
            template: './src/index.html',
            // 编译后的文件名
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    // 开发环境服务配置
    devServer: {
        // 启动热更新，当模块、组件有变化，不会刷新整个页面，而是局部刷新
        // 需要和插件webpack.HotModuleReplacementPlugin配合使用
        hot: true,
        // 静态资源目录
        contentBase: path.resolve(__dirname, 'dist')
    }
}