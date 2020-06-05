const merge = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/typescript-admin/'
    : '/',
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8081,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://www.echartsjs.com',
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        });
        return options;
      });
  },
  parallel: false,
};
