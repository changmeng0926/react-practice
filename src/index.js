import React from 'react'
import ReactDOM from 'react-dom/client'
// 国际化，antd语言设置成中文
import { ConfigProvider } from 'antd'
import locale from 'antd/locale/zh_CN'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
