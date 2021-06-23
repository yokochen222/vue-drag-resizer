module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
  configureWebpack: config => {
    config.module.rules.push({
      test: '/\.cur$/',
      use: [{
        loader: 'file-loader'
      }]
    })
  }
}