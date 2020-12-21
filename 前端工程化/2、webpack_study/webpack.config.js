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
    plugins: [htmlPlugin], // plugins 数组是 webpack 打包期间会用到的一些插件列表
    module:{      //所有第三方文件模块的匹配规则
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},   //test表示匹配的文件类型，use表示对应要调用的loader，多个loader调用顺序，从后往前
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,use:'url-loader?limit=16940'},   //?之后是loader的参数，limit用来指定图片的大小，单位是字节（byte）。只有小于limit大小的图片，才会呗转为base64
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}    //exclude表示排除项，不需要处理node_modules中的js 文件
        ]
    }
}