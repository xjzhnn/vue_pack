const { defineConfig } = require('@vue/cli-service')
// 排除
let externals = {
  'vue': 'Vue',
  'axios': 'axios',
  'element-ui': 'ELEMENT',
  'echarts': 'echarts',
}
// cdn资源
let cdn = {
  css: [
    // element-ui css
    'https://unpkg.com/element-ui/lib/theme-chalk/index.css',// 样式表
  ],
  js: [
    // vue must at first!
    'https://unpkg.com/vue@2/dist/vue.js', // vuejs
    // element-ui js
    'https://unpkg.com/element-ui/lib/index.js', // elementUI
    'https://unpkg.com/axios/dist/axios.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js'
  ]
}
// 判断环境
const isProd = process.env.NODE_ENV === 'production'
cdn = isProd ? cdn : { css: [], js: [] }
externals = isProd ? externals : {}
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  configureWebpack: {
    externals: externals
  },
  chainWebpack(config) {
    config.plugin('html').tap(args => {
      console.log('args',args);
      
      args[0].cdn = cdn
      return args
    })
  }
})
