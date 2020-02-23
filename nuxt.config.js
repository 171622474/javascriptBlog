module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'myproject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css:[
      {
          src:'@/assets/css/base.less',
            lang:'less'
      },
      {
          src:'@/assets/css/common.less',
            lang:'less'
      },
      '@/assets/css/normalize.css',
    ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/style-resources' // 添加对应的模块
  ],
  styleResources: {
    less: [
        '@/assets/css/common.less' // 全局 scss 变量
    ]
  }  
}

