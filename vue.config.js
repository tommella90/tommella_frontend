// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '/'
  };

  module.exports = {
    publicPath: '/tommella-frontend/', // GitHub Pages uses this base URL
  };
  
  