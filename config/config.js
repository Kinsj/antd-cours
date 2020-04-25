// umi 配置文件
export default {
  singular: true,  // pages 文件夹 变为 page
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
    }],
  ],
  routes: [
    {
      path: '/',
      component: './HelloWorld' // 相对于page目录的相对路劲
    }
  ]
}