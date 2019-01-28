module.exports = {
  css: { 
    extract: false 
  },
  pages: {
    index: {
      entry: 'demo/vue-demo/main.js',
      template: 'demo/vue-demo/index.html',
      filename: 'index.html',
      title: 'Vue-Tooltip',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-time/'
    : '/'
}