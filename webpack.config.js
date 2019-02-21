const { join, resolve } = require("path");
const { cpus } = require("os");
const { HotModuleReplacementPlugin, IgnorePlugin, DefinePlugin } = require("webpack");
const { getIfUtils } = require("webpack-config-utils");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const autoprefixer = require("autoprefixer");

const PAGE = process.env.PAGE;
const DEV_PORT = 8889;
const DIST_DIR = resolve(__dirname, "dist");
const SRC_DIR = resolve(__dirname, "src");

module.exports = (env, argv) => {
  const { ifProd } = getIfUtils(env);

  return {
    context: SRC_DIR,
    entry: {
      initsetup: "./initsetup.jsx",
      setup: "./setup.jsx"
    },
    output: {
      path: DIST_DIR,
      filename: "[name].[hash].js"
    },
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties", { "loose": true }],
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-transform-runtime"
              ]
            }
          }
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        },
        {
          test: /\.less$/,
          use: [
            ifProd(MiniCssExtractPlugin.loader, { loader: "style-loader" }),
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                modules: true,
                sourceMap: true,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  autoprefixer({ browsers: ["last 2 versions"] })
                ],
                sourceMap: true
              }
            },
            {
              loader: "less-loader",
              options: {
                outputStyle: "expanded",
                sourceMap: true,
                paths: [
                  resolve(SRC_DIR, "common", "styles")
                ]
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            ifProd(MiniCssExtractPlugin.loader, { loader: "style-loader" }),
            { loader: "css-loader" }
          ]
        },
        {
          test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: "file-loader",
          options: {
            name: "resources/fonts/[name].[ext]"
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: "image-webpack-loader",
          enforce: "pre",
          options: {
            bypassOnDebug: true
          }
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            name: "resources/images/[name].[ext]"
          }
        },
        {
          test: /\.svg$/,
          loader: "svg-url-loader",
          options: {
            limit: 10 * 1024,
            name: "resources/svg/[name].[ext]",
            noquotes: true
          }
        },
        {
          test: /\.json$/,
          type: "javascript/auto",
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          },
          include: [resolve(SRC_DIR, "resources", "i18n")]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".less", ".css"]
    },
    plugins: [
      new CleanWebpackPlugin([DIST_DIR]),
      new HtmlWebpackPlugin({
        template: "./initsetup.html",
        filename: "./initsetup.html",
        chunks: ["initsetup"]
      }),
      new HtmlWebpackPlugin({
        template: "./setup.html",
        filename: "./setup.html",
        chunks: ["setup"]
      }),
      new MiniCssExtractPlugin({
        filename: ifProd("[name].[hash].css", "[name].css")
      }),
      new CopyWebpackPlugin([
        {
          from: resolve(SRC_DIR, "resources", "i18n"),
          to: resolve(DIST_DIR, "resources", "i18n")
        }
      ]),
      new IgnorePlugin(/^\.\/locale$/, /moment$/),
      new DefinePlugin({
        DEBUG_I18N: process.env.DEBUG_I18N === "true"
      }),
      new CaseSensitivePathsPlugin(),
      new HotModuleReplacementPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        name: "common"
      },
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    target: "web",
    cache: true,
    mode: ifProd("production", "development"),
    devtool: ifProd("inline-source-map", "eval-source-map"),
    devServer: {
      proxy: {
        "/REQUEST": "http://localhost:5532/"
      },
      contentBase: DIST_DIR,
      port: DEV_PORT,
      compress: true,
      historyApiFallback: {
        index: `/${PAGE}.html`
      },
      hot: true
    },
    stats: {
      assets: true,
      colors: true,
      errors: true,
      errorDetails: true
    }
  };
};
