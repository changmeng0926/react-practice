import { http } from '@/utils'
/**
 * description: 登录
 * params: { mobile, password }
 * **/
export const login = async (params) => {
  return await http.post('/login', params)
}
/**
 * description: 登出
 * **/
export const logout = async () => {
  return await http.get('/logout')
}
/**
 * description: 获取用户信息
 * **/
export const getUserInfo = async () => {
  return await http.get('/userinfo')
}
/**
 * description: 获取dashboard数据
 * **/
export const getBoardData = async () => {
  return await http.get('/dashboard/data')
}
/**
 * description: 获取文章列表
 * **/
export const getArticles = async () => {
  return await http.get('/articles')
}
/**
 * description: 新增文章
 * params: {  }
 * **/
export const addArticle = async (params) => {
  return await http.post('/add/article', params)
}
/**
 * description: 删除文章
 * params: { id }
 * **/
export const deleteArticle = async (params) => {
  return await http.get('/delete/article', params)
}
/**
 * description: 修改文章收藏状态
 * params: { id, isCollect: true/false(是/否) }
 * **/
export const updateStatus = async (params) => {
  return await http.get('/update/collectStatus', params)
}
