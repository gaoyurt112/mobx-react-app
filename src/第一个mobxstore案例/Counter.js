//编写第一个mobx小案例
/*
实现步骤
1. 定义数据状态（state）

2. 数据响应式处理

3. 定义action函数  （修改数据）

4. 实例化并导出实例

*/

import { makeAutoObservable } from "mobx"

//创建一个类
class CounterStore {
  //自定义数据状态
  count = 0
  //数据响应式处理
  constructor() {
    makeAutoObservable(this)
  }
  //定义action函数
  addCount = () => {
    this.count++
  }
}
//实例化并导出实例
const counterStore = new CounterStore()
export default counterStore