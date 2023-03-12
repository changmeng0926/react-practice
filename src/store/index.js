import LoginStore from './loginStore'
import UserStore from './userStore'
import HomeStore from './homeStore'
import React from 'react'

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
    this.homeStore = new HomeStore()
  }
}
const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export default useStore
