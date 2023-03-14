import { Layout, Menu, theme } from 'antd'
import { AreaChartOutlined, UnorderedListOutlined, DiffOutlined } from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import React from 'react'
import { useEffect } from 'react'
import Info from './info'
import './index.scss'
import useStore from '@/store'
const { Header, Sider } = Layout

const item = [
  { icon: <AreaChartOutlined />, key: '/', label: '数据概览', title: '数据概览' },
  { icon: <UnorderedListOutlined />, key: '/article', label: '内容管理', title: '内容管理' },
  { icon: <DiffOutlined />, key: '/publish', label: '发布文章', title: '发布文章' },
]

function LayoutComponent() {
  const navigate = useNavigate()
  const location = useLocation()

  const { channelStore } = useStore()
  useEffect(() => {
    channelStore.loadChannels()
  }, [channelStore])

  const current = location.pathname
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout className="layout">
      <Header className="header">
        <h1 className="logo"> </h1>
        <Info />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[current]}
            onClick={({ key }) => navigate(key)}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={item}
          />
        </Sider>
        <Layout
          className="layout-main"
          style={{
            padding: '24px',
          }}
        >
          {/* <Breadcrumb
            items={item}
            style={{
              margin: '16px 0',
            }}
          /> */}
          {/* <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
          </Content> */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
