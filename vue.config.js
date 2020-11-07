const path = require('path');

module.exports = {
  // lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('@assets', path.join(__dirname, 'src/assets'));
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-mall-admin/'
    : '/',

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
