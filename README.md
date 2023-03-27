# react-practice

注意点：

1. 采用mobx进行状态管理
2. mobx-react-lite 只支持函数组件
3. craco是用来修改配置项的

### 项目文件结构

| 文件                 |                  |
| -------------------- | ---------------- |
| api                  | 存放接口集合     |
| assets               | 存放一些静态文件 |
| components           | 公共组件         |
| hooks                | hooks函数        |
| store                | mobx状态管理     |
| styles               | 一些样式         |
| utils                | 一些公共方法     |
| page/Article         |                  |
| page/Home            |                  |
| page/LayoutComponent |                  |
| page/LogicReuse      |                  |
| page/Login           |                  |
| page/Publish         |                  |
| craco.config.js      | webpack默认扩展  |
| jsconfig.json        | 路径提示         |
|                      |                  |
|                      |                  |
|                      |                  |
|                      |                  |

### craco.config.js

修改 `create-react-app` 默认配置

```js
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}
```

### jsconfig.json

配置代码提示

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

```

