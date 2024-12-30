// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/tommella-frontend/' : '/',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/_redirects', to: '' },
        ],
      }),
    ],
  },
};
