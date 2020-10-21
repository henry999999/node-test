const webpack = require("webpack");
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    //configureWebpack 是Vue CLI3.0 中用于配置 webpack 插件参数的地方，你在这里设置，会新建或者覆盖 webpack 默认配置。
    //webpack ProvidePlugin 的含义是创建一个全局的变量，使这个变量在 webpack 各个模块内都可以使用。这里的配置含义是创建 '$'、'jQuery'、'window.jQuery' 三个变量指向 jquery 依赖，创建 'Popper' 变量指向 popper.js 依赖。
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            }),
        ],
    },
    devServer: {
        port: 8086,
        open: true //自动打开浏览器
    },
    css: {
        sourceMap: true
    },
    // 配置src别名
    chainWebpack(config) {
        config.resolve.alias
            .set('src', resolve('src'))
    },
    publicPath: './',
    lintOnSave: false,
    // 更改输出目录
    outputDir: path.resolve(__dirname, './dist/nodetest'),
}