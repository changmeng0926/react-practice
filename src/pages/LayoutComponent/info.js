/**
 * Description：头部个人信息组件
 * **/
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Popconfirm } from 'antd'
import useStore from '@/store'

function Info() {
  const navigate = useNavigate()
  const { loginStore, userStore } = useStore()
  const userName = userStore.userinfo?.userName || ''
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const descStyle = { width: '150px', whiteSpace: 'nowrap', lineHeight: '36px' }

  useEffect(() => {
    userStore.getInfo()
  }, [userStore])

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
      <span className="account">{userName}</span>
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

export default observer(Info)
