import { makeAutoObservable } from 'mobx'
import { message } from 'antd'
import { local } from '@/utils'
import { login, logout } from '@/api'

const { setSession, getSession, removeSession } = local

class LoginStore {
  cookie = getSession('cookie') || ''
  loginTime = getSession('loginTime') || ''
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async (params) => {
    const res = await login(params)
    const { cookie, loginTime } = res.data
    this.cookie = cookie
    this.loginTime = loginTime
    setSession('cookie', this.cookie)
    setSession('loginTime', this.loginTime)
    message.success('登录成功')
  }
  // 登出
  logout = async () => {
    const res = await logout()
    if (res.code === 200) {
      message.success('注销成功')
      removeSession('cookie')
      removeSession('loginTime')
    }
  }
}

export default LoginStore
