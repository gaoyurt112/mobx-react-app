import { computed, makeAutoObservable } from "mobx"
class ListStore {
  list = [1, 2, 3, 4, 5, 6]
  constructor() {
    makeAutoObservable(this, {
      filterList: computed
    })
  }
  get filterList () {
    return this.list.filter(item => item > 2)
  }
  addList = () => {
    this.list.push(7, 8, 9)
  }
}

const listStore = new ListStore()
export default listStore