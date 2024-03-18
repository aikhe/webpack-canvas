const path = require("path");
const HtmlWebpackLogin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    app: {
      import: "./src/app.js",
      dependOn: "shared",
    },
    shared: ["lodash", "gsap"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackLogin({
      title: "Webpack Setup",
      filename: "index.html",
      template: path.resolve(__dirname, "template.html"),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
