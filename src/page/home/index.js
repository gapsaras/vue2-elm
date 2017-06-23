const home = r => {
    // 传入第三个参数，可以将同名的组件打包在一个chunk下
    /*
    require.ensure(['./home.vue'], () => {r.require('./home.vue'), 'group-name'})
    */
    require.ensure(['./home.vue'], () => {
        r(require('./home.vue'));
    })
}
export default home;
