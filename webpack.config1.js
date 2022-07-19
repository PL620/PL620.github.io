const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js',
    },
	plugins: [new HtmlWebpackPlugin({ template: './index.html',filename:"index.html" })],
	mode: 'development',
	module: {
	     rules: [
			{
				test:/\.less/,
				 use:[
					 'style-loader',
					 'css-loader',
					 'less-loader'
				 ]
			},
			{
				test:/\.(png|svg|jpg|jpeg|gif)/,
				 use:{
					 loader:"url-loader",
					 options:{
						 // publicPath:"./img/",
						 limit:800000
					 }
				 }
			}
			 
		 ],
	},
	devServer: {
	    static: './dist',
	}
};