const path = require('path');

const resolve = filePath => path.resolve(__dirname, filePath);
const isProduction = process.env.NODE_ENV === 'production';
const BASE_URL = isProduction ? '/dist/' : '/';
module.exports = {
  publicPath: BASE_URL, // 打包后的路径
  chainWebpack: (config) => { // 修改webpcak原来配置
    // config.output.chunkFilename = '[name].min.js';
    // 关闭入口最大限制提示
    config.performance.set('hints', false);
    // 别名
    config.resolve.alias.set('@', resolve('src'));
    config.resolve.alias.set('_c', resolve('src/components'));
    config.resolve.alias.set('_v', resolve('src/views'));
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
