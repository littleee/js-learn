var webpack = require('webpack');
const path = require('path');
var glob = require('glob');
/*
extract-text-webpack-plugin插件，
有了它就可以将你的样式提取到单独的css文件里，
妈妈再也不用担心样式会被打包到js文件里了。
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/*
html-webpack-plugin插件，重中之重，webpack中生成HTML的插件，
具体可以去这里查看https://www.npmjs.com/package/html-webpack-plugin
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var entries = getEntry('app/js/page/**/**.js','app/js/page/');
var config  = {
    //页面入口文件配置
    entry: entries,
    //入口文件输出配置
    output: {
        path: __dirname+'/build/',
        publicPath: "/dist/",
        filename: 'js/[name].js'
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
    plugins: [

    ],
};

// HtmlWebpackPlugin 入口为 template（pages下的js），输出html
var pages = Object.keys(getEntry('app/template/**/**.html','app/template/'));
pages.forEach(function(pathname){
	var conf = {
    inject: 'body'|false,
		filename:  pathname + '.html',
    template: 'app/template/' + pathname + '.html'
	};
	config.plugins.push(new HtmlWebpackPlugin(conf));
})

module.exports = config;

function getEntry(globPath,pathDir){

	var files = glob.sync(globPath);
	var entries = {},
		entry, dirname, basename, pathname, extname;

	for(var i = 0; i < files.length; i++){
		entry = files[i];
		dirname = path.dirname(entry);
		extname = path.extname(entry);
		basename = path.basename(entry, extname);
		pathname = path.normalize(path.join(dirname, basename));
		pathDir = path.normalize(pathDir);

		if (pathname.startsWith(pathDir)) {
			pathname = pathname.substring(pathDir.length);
		}

		pathname = pathname.replace(/\\/g, '/');

		entries[pathname] = ['./' + entry];
	}

	return entries;

}
