import { makeAutoObservable } from "mobx"

class CountStore {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }
  addCount = () => {
    this.count++
  }
}

const countStore = new CountStore()
export default countStore