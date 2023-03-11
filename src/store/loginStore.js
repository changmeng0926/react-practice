import { makeAutoObservable } from 'mobx'
import { message } from 'antd'
import { http, local } from '@/utils'

const { setSession, getSession, removeSession } = local

class LoginStore {
  cookie = getSession('cookie') || ''
  info = null
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async ({ mobile, password }) => {
    const res = await http.post('/login', { mobile, password })
    this.cookie = res.data.cookie
    this.info = { mobile }
    setSession('cookie', this.cookie)
    setSession('account', mobile)
    message.success('登录成功')
  }
  // 登出
  logout = async () => {
    const res = await http.get('/logout')
    console.log(res, 'logout')
    if (res.code === 200) {
      message.success('注销成功')
      removeSession('cookie')
      removeSession('account')
      this.info = null
    }
  }
}

export default LoginStore
