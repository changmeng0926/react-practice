const path = require('path')
const { getPlugin, pluginByName, whenProd } = require('@craco/craco')
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
    // 配置cdn
    configure: (webpackConfig) => {
      let cdn = {
        js: [],
        css: [],
      }
      // 生产环境才配置cdn
      whenProd(() => {
        // key： 需要使用cdn引入的包
        // value： js文件中使用的全局挂载变量名称，即通过 import 导入的react react-dom
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
        cdn = {
          js: [
            'https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js',
            'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
          ],
        }
      })
      // 一切都是为了配合 HtmlWebpackPlugin 将来在 public/index.html 注入
      const { isFound, match } = getPlugin(webpackConfig, pluginByName('HtmlWebpackPlugin'))
      if (isFound) {
        match.userOptions.cdn = cdn
        // match.userOptions.cdn = whenProd(
        //   () => ({
        //     js: [
        //       'https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js',
        //       'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
        //     ],
        //     css: ['https://cdn.bootcdn.net/ajax/libs/antd/5.1.6/reset.min.css'],
        //   }),
        //   {
        //     js: [],
        //     css: [],
        //   }
        // )
      }
      return webpackConfig
    },
  },
}
