import LoginStore from './loginStore'
import UserStore from './userStore'
import HomeStore from './homeStore'
import ChannelStore from './channelStore'
import React from 'react'

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
    this.homeStore = new HomeStore()
    this.channelStore = new ChannelStore()
  }
}
const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export default useStore
