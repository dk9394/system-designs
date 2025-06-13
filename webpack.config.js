import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new ESLintPlugin({
			files: 'src/**/*.{js,ts}',
			fix: true, // Auto-fix lint errors
		}),
	],
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 3000,
	},
};
