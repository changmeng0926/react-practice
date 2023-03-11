import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Popconfirm } from 'antd'
import { local } from '@/utils'
import useStore from '@/store'
const { getSession } = local
function Info() {
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const account = getSession('account') || ''
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const descStyle = { width: '150px', whiteSpace: 'nowrap', lineHeight: '36px' }
  const logout = async () => {
    setLoading(true)
    await loginStore.logout()
    setOpen(false)
    setLoading(false)
    navigate('/login', { replace: true })
  }
  const cancle = () => {
    setOpen(false)
  }
  const showPop = () => {
    setOpen(true)
  }
  return (
    <div className="info">
      <UserOutlined className="icon" />
      <span className="account">{account}</span>
      <Popconfirm
        title="请确认"
        placement="leftTop"
        description={<div style={descStyle}>是否退出登录?</div>}
        okText="退出"
        cancelText="取消"
        onConfirm={logout}
        onCancel={cancle}
        open={open}
        okButtonProps={{ loading }}
      >
        <LogoutOutlined onClick={showPop} className="logout-icon" />
      </Popconfirm>
    </div>
  )
}

export default Info
