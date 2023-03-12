import { makeAutoObservable } from 'mobx'
import { getBoardData } from '@/api'

class HomeStore {
  barData = null
  lineData = null
  loading = false
  constructor() {
    makeAutoObservable(this)
  }

  async getChartData() {
    this.loading = true
    const res = await getBoardData()
    this.loading = false
    this.barData = res.data.barData
    this.lineData = res.data.lineData
  }
}

export default HomeStore
