const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const serverConfig = {
  entry: './server/index.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    loaders: [
      { test: /.*\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
  ],
}

const clientConfig = {
  entry: './app/index.tsx',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    loaders: [
      { test: /.*\.css$/, loader: 'style-loader' },
      {
        test: /.*\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[local]-[hash:base64:5]',
        }
      },
      { test: /.*\.tsx?$/, loader: 'ts-loader' },
    ],
  },
}

// module.exports = [serverConfig, clientConfig]
module.exports = [serverConfig]
