import { makeAutoObservable } from 'mobx'
import { message } from 'antd'
import { http, local } from '@/utils'

const { setSession, getSession } = local

class LoginStore {
  cookie = getSession('cookie') || ''
  constructor() {
    makeAutoObservable(this)
  }
  login = async ({ mobile, password }) => {
    const res = await http.post('/login', { mobile, password })
    this.cookie = res.data.cookie
    setSession('cookie', this.cookie)
    message.success('登录成功')
  }
}

export default LoginStore
