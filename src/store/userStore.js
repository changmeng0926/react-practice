import { makeAutoObservable } from 'mobx'
import { getUserInfo } from '@/api'

class UserStore {
  userinfo = null
  constructor() {
    makeAutoObservable(this)
  }
  async getInfo() {
    const res = await getUserInfo()
    this.userinfo = res.data
  }
}

export default UserStore
