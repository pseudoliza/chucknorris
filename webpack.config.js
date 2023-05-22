const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { DefinePlugin } = require('webpack');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env, { mode }) => {
  const isProduction = mode === 'production';

  return {
    entry: './src/index.tsx',
    output: {
      path: `${__dirname}/dist`,
      filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                getCustomTransformers: () => ({
                  before: isProduction ? [] : [ReactRefreshTypeScript()],
                }),
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      !isProduction && new ReactRefreshWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devServer: {
      static: {
        directory: `${__dirname}/dist`,
      },
      port: 3000,
      historyApiFallback: true,
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    mode,
  };
};
