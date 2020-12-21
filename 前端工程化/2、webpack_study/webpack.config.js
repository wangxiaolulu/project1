const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin') // 导入生成预览页面的插件，得到一个构造函数
const htmlPlugin = new htmlWebpackPlugin({ // 创建插件的实例对象
    template: './src/index.html', // 指定要用到的模板文件
    filename: 'index.html' // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})

module.exports = {
    mode: 'development', //mode用来指定构建模式，以设置为development(开发模式)，production(发布模式)
    entry: path.join(__dirname,'./src/index.js'),     //设置入口文件
    output:{    //
        path: path.join(__dirname,'./dist'),     //设置输出文件路径
        filename: 'bundle.js'                     //输出文件名称
    },
    plugins: [htmlPlugin] // plugins 数组是 webpack 打包期间会用到的一些插件列表
}