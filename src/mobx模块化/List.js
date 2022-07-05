import { computed, makeAutoObservable } from "mobx"

//创建一个类
class ListStore {
  //自定义数据状态
  list = [1, 2, 3, 4, 5, 6]
  //数据响应式处理
  constructor() {
    makeAutoObservable(this, {
      // 标记计算属性
      filters: computed
    })
  }

  //定义计算属性
  get filterList () {
    return this.list.filter(item => item > 2)
  }

  //修改list的方法
  addList = () => {
    this.list.push(6, 7, 8)
  }
}
//实例化并导出实例
const listStore = new ListStore()
export default listStore