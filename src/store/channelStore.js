import { makeAutoObservable } from 'mobx'
import { getChannels } from '@/api'

class ChannelStore {
  channels = []
  constructor() {
    makeAutoObservable(this)
  }

  async loadChannels() {
    const res = await getChannels()
    this.channels = res.data.list
  }
}

export default ChannelStore
