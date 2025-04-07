const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [],
  css: {sourceMap: true},
  devServer:{
    hot: true,
    open: true,
  }
  // publicPath: "/cuba-vue/"
})