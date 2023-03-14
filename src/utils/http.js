import axios from 'axios'
import { message } from 'antd'
import { getSession, removeSession } from './local'
import history from './history'
import { debounce } from './tools'

const http = axios.create({
  baseURL: 'https://mock.mengxuegu.com/mock/640af59c4689d550adbe0a82/react-practice',
  timeout: 10000,
})

const token = getSession('cookie')
const limitTime = 2 * 60 * 60 * 1000
// 登录时间已超时，需要重新登录
const timeout = debounce(() => {
  removeSession('cookie')
  removeSession('loginTime')
  message.warning('登录时间已超时，需要重新登录')
  return history.push('/login')
}, 500)

http.interceptors.request.use(
  (config) => {
    if (token) {
      // 设置token
      config.headers.Authorization = `Bearer${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  (response) => {
    const loginTime = getSession('loginTime')
    const res = response.data
    if (
      window.location.pathname !== '/login' &&
      loginTime &&
      new Date(res.data?.now)?.getTime() - new Date(loginTime)?.getTime() > limitTime
    ) {
      return timeout()
    }
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http
