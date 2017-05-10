var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.tsx',
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle

    path: path.resolve(__dirname, 'dist'),

    // necessary for HMR to know where to load the hot update chunks
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  devtool: 'source-map',

  module: {
    rules: [
   {
        test: /.css$/,
        loader: 'style-loader!css-loader',
        exclude:/src/
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        exclude:/node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};
