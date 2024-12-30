const { defineConfig } = require('@vue/cli-service')


// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://tommella-cv-prod-ee14d9b8bb74.herokuapp.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});


// const CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/tommella-frontend/' : '/',
//   configureWebpack: {
//     plugins: [
//       new CopyWebpackPlugin({
//         patterns: [
//           { from: 'public/_redirects', to: '' },
//         ],
//       }),
//     ],
//   },
// };
