const path = require('path')
module.exports = {
  webpack: {
    //webpack配置
    // 配置别名
    alias: {
      //设置别名是为了让后续引用的地方减少路径的复杂度
      // '@': path.resolve(__dirname, 'src')
      '@': path.resolve('src'),
      '@assets': path.resolve('src/assets'),
      '@utils': path.resolve('src/utils'),
      '@pages': path.resolve('src/pages'),
      '@hooks': path.resolve('src/hooks'),
      '@store': path.resolve('src/store'),
      '@style': path.resolve('src/style'),
    },
  },
  // babel: {
  //   //支持装饰器
  //   plugins: [
  //     ['@babel/plugin-proposal-decorators', { legacy: true }],
  //     [
  //       'import',
  //       {
  //         libraryName: 'antd',
  //         libraryDirectory: 'es',
  //         style: 'css', //设置为true即是less 这里用的是css
  //       },
  //     ],
  //   ],
  // },
  // module: {
  //   rules: [
  //     //规则，在写style.module.scss的时候发现引入后缀为.scss会报错，在这里配置一下即可
  //     {
  //       test: /.scss$/,
  //       loaders: ['style-loader', 'css-loader', 'sass-loader'],
  //     },
  //   ],
  // },
  //配置代理解决跨域
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://XXXXXXXX:8888',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //     },
  //   },
  // },
}
