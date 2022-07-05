import countStore from "./Counter"
import listStore from "./List"
import React from 'react'
class RootStore {
  constructor() {
    this.countStore = countStore
    this.listStore = listStore
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)
export { useStore }