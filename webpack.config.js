var webpack = require('webpack');
var path = require('path');
module.exports = {
	context: path.resolve(__dirname, './app'),
    entry: {
		"app": [ './app.js' ],
		"app-bundle": [ './app-bundle.js' ],
	},
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: 'dist/',
    },
	
	resolve: {
		alias: {
			modules: path.join(__dirname, "node_modules"),
		}
	},
	
	plugins: [
		
    ],
	
    module: {
        loaders: [
        ],
		rules: [
			{
				test: /\.js?$/,
                exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					plugins: [
						'transform-class-properties',
						'transform-runtime'
					],
					presets: ['stage-0']
				}
			},
			{
				test: /\.php$/,
				use: [
					'php-loader'
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { modules: true },
					},
				],
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				use:[
					"file"
				]
			},
		],
    },
    externals: {
        
    },
    devtool: 'eval'
};
