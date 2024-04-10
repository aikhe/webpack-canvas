const path = require("path");
const HtmlWebpackLogin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: {
      import: "./src/main.jsx",
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackLogin({
      favicon: "./src/webpack.ico",
      title: "Webpack Setup",
      filename: "index.html",
      template: path.resolve(__dirname, "./template.html"),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
