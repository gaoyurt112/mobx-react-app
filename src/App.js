import { observer } from "mobx-react-lite"
import { useStore } from './store/index'
function App () {
  const rootStore = useStore()
  return (
    <>
      {rootStore.countStore.count}
      {rootStore.listStore.filterList.join('-')}
      <button onClick={rootStore.countStore.addCount}>click</button>
      <button onClick={rootStore.listStore.addList}>click2</button>
    </>
  )
}
export default observer(App)