const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const basePath = __dirname;
const { merge } = require("webpack-merge");

module.exports = merge(
  {},
  {
    context: path.join(basePath, "../src"),
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: {
        scenes: path.resolve(basePath, "../src/scenes"),
        pods: path.resolve(basePath, "../src/pods"),
        core: path.resolve(basePath, "../src/core"),
        routes: path.resolve(basePath, "../src/routes"),
      },
    },
    entry: {
      app: ["regenerator-runtime/runtime", "./index.tsx"],
    },
    /* stats: "errors-only",
  output: {
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },*/
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 1000,
                name: "assets/img/[name].[ext]",
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },
    plugins: [
      //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: "index.html", //Name of file in ./dist/
        template: "index.html", //Name of template in ./src
      }),
    ],
  }
);
