var webpack = require('webpack');
const path = require('path');
// var entries = getEntry('app/js/page/**.js','app/js/page');
//
// module.exports = {
//     entry: entries,
//     output: {
//         path: path.join(__dirname,'dist'),
//         filename: 'js/[name].js'
//     }
// };
module.exports = {
    //页面入口文件配置
    entry: ['./app/js/page/index.js'],
    //入口文件输出配置
    output: {
        path: __dirname+'/build/js/',
        publicPath: "/dist/js/",
        filename: 'index.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.(js|jsx?)$/,
               exclude: /node_modules/,
               loaders: ['babel-loader']
            }
        ]
    },
};
