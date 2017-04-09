/* eslint-env node */

'use strict';

let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin  = require('extract-text-webpack-plugin');

function definePlugins(env) {
	let plugins = [];
	plugins.push(new ExtractTextPlugin({filename: './css/style.css',
		disable: env.dev}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}));
	if (env.prod) {
		plugins.push(new webpack.optimize.UglifyJsPlugin());
	}
	return plugins;
}


module.exports = env => {
	return {
		context: path.join(__dirname, 'src'),
		entry: './app',
		output: {
			path: path.join(__dirname, 'public'),
			publicPath: '/public',
			filename: 'bundle.js'
		},

		watch: env.dev,

		devtool: env.dev ? 'source-map' : false,

		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						presets: ['es2015', 'react']
					}
				},
				{
					test: /\.scss$/,
					loaders: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: ['css-loader', 'sass-loader']
					})
				},
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader'
					})
				},
				{
					test: /\.(png|jpg|svg)$/i,
					loader: 'file-loader?name=[path][name].[ext]&publicPath=src/pics/&outputPath=public/src/'

				}
			]
		},

		plugins: definePlugins(env),

		devServer: {
			hot: env.dev,
			publicPath: '/public/'
		}
	};
};
