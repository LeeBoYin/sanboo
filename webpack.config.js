const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
console.log(process.env.NODE_ENV);
module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'main.[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@directives': path.resolve(__dirname, 'src/directives'),
			'@libs': path.resolve(__dirname, 'src/libs'),
			'@plugins': path.resolve(__dirname, 'src/plugins'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@style': path.resolve(__dirname, 'src/style'),
			'@views': path.resolve(__dirname, 'src/views'),
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
			{ test: /\.vue$/, use: 'vue-loader' },
			{
				test: /\.s[ac]ss$/i,
				use: [
					'vue-style-loader',
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							// disable: process.env.NODE_ENV !== 'production',
							disabled: false,
							mozjpeg: {
								progressive: true,
								quality: 75,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							// webp: {
							// 	quality: 75
							// }
						},
					},
				],
			},
			{ test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
		]
	},
	devServer: {
		open: false,
		hot: true,
		host: '0.0.0.0',
		port: 8000,
		historyApiFallback: true, // for vue router mode history
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			// favicon: './static/favicon.ico',
		}),
		new CopyPlugin([
			{ from: 'static', to: 'static' },
		]),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			// _: 'lodash',
			// moment: 'moment',
			Vue: ['vue/dist/vue.esm.js', 'default'],
			// mapState: ['vuex', 'mapState'],
			// mapGetters: ['vuex', 'mapGetters'],
			// mapMutations: ['vuex', 'mapMutations'],
			// mapActions: ['vuex', 'mapActions'],
		}),
	],
};
