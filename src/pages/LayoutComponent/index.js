import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { AreaChartOutlined, UnorderedListOutlined, DiffOutlined } from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import React from 'react'
import Info from './info'
import './index.scss'
const { Header, Sider, Content } = Layout

const item = [
  { icon: <AreaChartOutlined />, key: '/', label: '数据概览', title: '数据概览' },
  { icon: <UnorderedListOutlined />, key: '/article', label: '内容管理', title: '内容管理' },
  { icon: <DiffOutlined />, key: '/publish', label: '发布文章', title: '发布文章' },
]

function LayoutComponent() {
  const navigate = useNavigate()
  const location = useLocation()
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
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            items={item}
            style={{
              margin: '16px 0',
            }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
