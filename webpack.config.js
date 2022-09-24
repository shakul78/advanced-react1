module.exports = {
  entry: `./src/index.jsx` ,
  output: {
    filename: "main.js"
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