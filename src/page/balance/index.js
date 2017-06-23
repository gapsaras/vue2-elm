const balance = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['./balance.vue'], () => {
    resolve(require('./balance.vue'))
  })
}
export default balance;
