const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {sourceMap: true},
  devServer:{
    hot: true,
    open: true,
  }
  // publicPath: "/cuba-vue/"
})