module.exports = {
	mode: 'development',
	entry: '../src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '../build'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.jsx$/,
				exclude: /\.\.\/\.\.\/node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}
			},
		]
	}

}