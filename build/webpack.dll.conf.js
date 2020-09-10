/**
 * 配置静态公共资源打包配置
 */

var path = require('path')
var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 配置需要打包的模块的数组
    entry: {
        vendor: [
            'vue',
            // 'lodash',
            'vuex',
            'axios',
            'vue-router',
            'element-ui',
            // 'echarts',
            'xlsx',
        ],
    },
    output: {
        path: path.join(__dirname, '../dist/vendor-dll-js'), // 打包后文件输出的位置
        filename: '[name].dll.js',
        library: '[name]_library',
        // vendor.dll.js中暴露出的全局变量名。
        // 主要是给DllPlugin中的name使用，
        // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        },
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname,
        }),
        // 压缩打包的文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
    ],
}
