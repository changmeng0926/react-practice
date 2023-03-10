import axios from 'axios'

const http = axios.create({
  baseURL: 'https://mock.mengxuegu.com/mock/640af59c4689d550adbe0a82/react-practice',
  timeout: 10000,
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http
