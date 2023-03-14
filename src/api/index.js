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
 * description: 获取 数据概览图表 数据
 * **/
export const getBoardData = async () => {
  return await http.get('/dashboard/data')
}
/**
 * description: 获取频道数据
 * **/
export const getChannels = async () => {
  return await http.get('/channels')
}
/**
 * description: 获取文章列表
 * **/
export const getArticles = async (params) => {
  return await http.get('/articles', { params })
}
/**
 * description: 新增文章
 * @params: {
 *    @content|JSX String: 内容
 *    @currentChannel|String: 频道
 *    @title|String: 标题
 *    @cover: {
 *      @type|Number: 最大图片数量
 *      @images|Array: 图片列表
 *    }
 * }
 * **/
export const addArticle = async (params) => {
  return await http.post('/add/article', params)
}
/**
 * description: 删除文章
 * params: { id }
 * **/
export const deleteArticle = async (params) => {
  return await http.get('/delete/article', { params })
}
/**
 * description: 修改文章收藏状态
 * params: { id, isCollect: true/false(是/否) }
 * **/
export const updateStatus = async (params) => {
  return await http.get('/update/collectStatus', { params })
}
/**
 * description: 获取文章详情
 * params: { id }
 * **/
export const getDetails = async (params) => {
  return await http.get('/article/details', { params })
}
