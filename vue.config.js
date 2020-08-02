module.exports = {
  runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8020',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
