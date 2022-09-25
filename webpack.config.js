
module.exports = {
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'prop-types',
      'axios',
      'lodash.debounce',
      'lodash.pickby'
    ],
    app: [`./src/index.jsx`]
  },
  
  output: {
    filename: '[name].js'
  },
  devtool: 'eval-source-map',
  module: {

    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  
};