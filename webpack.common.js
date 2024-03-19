const path = require("path");
const HtmlWebpackLogin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    shared: ["react", "react-dom", "gsap"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackLogin({
      title: "Webpack Setup",
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
