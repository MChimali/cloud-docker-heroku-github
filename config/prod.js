const { merge } = require("webpack-merge");
const base = require("./base");
const path = require("path");
const rootPath = path.resolve(__dirname, "../");

module.exports = merge(base, {
  mode: "production",
  output: {
    path: path.join(rootPath, "dist"),
    filename: "./js/[name].js",
    assetModuleFilename: "./images/[ext][query]",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
});
