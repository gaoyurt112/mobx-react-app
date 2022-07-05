import React from 'react'
import counterStore from './Counter'
import listStore from "./List"

//声明一个rootstore
class RootStore {
  //组合store,对子模块进行实例化操作
  constructor() {
    this.counterStore = counterStore
    this.listStore = listStore
  }
}
//实例化store注入context
const rootStore = new RootStore()
const context = React.createContext(rootStore)
//到处useStore方法，供组件通过调用该方法使用根实例
const useStore = () => React.useContext(context)
export { useStore }