const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {
  const { MODE: mode = "development" } = env;

  const isProd = mode === "production";
  const isDev = mode === "development";
  const isTest = mode === "test";

  return {
    mode: isProd ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpe?g|png)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name].[ext]",
              },
            },
          ],
        },
        {
          test: /\.(ttf|woff2?)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ],
    devServer: {
      open: true,
    },
  };
};
