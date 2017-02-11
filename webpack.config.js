/**
 * Created by apple on 2017/2/9.
 */

const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: {
		main: './src/main.js'
		// vendor: [
		//   'vue',
		//   'vue-router',
		//   'vuex'
		// ]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: '[name].js'
	},
	resolveLoader: {
		moduleExtensions: ['-loader']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue',
				options: {
					preserveWhitespace: false,
					postcss: [
						require('autoprefixer')({
							browsers: ['last 3 versions']
						})
					]
				}
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: './src/assets/image', to: './'}
		])
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		port: 8098,
		host: '127.0.0.1'
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}

