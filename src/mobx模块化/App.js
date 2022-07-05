//引入store实例
import { useStore } from './store/index'

//引入试图更新的关键方法
import { observer } from 'mobx-react-lite'

function App () {
  const rootStore = useStore()
  // const {counterStore,listStore} = useStore() //解构也可以，解构到store实例对象就可以了。防止破坏响应式
  return (
    <>
      {/* 使用store中的数据 */}
      {rootStore.counterStore.count}
      {rootStore.listStore.filterList.join('-')}
      <div>
        {/* 修改store中的数据 */}
        <button onClick={rootStore.counterStore.addCount}>点击</button>
        <button onClick={rootStore.listStore.addList}>点击</button>
      </div>
    </>
  )
}
// 使用observer方法包裹组件，使其响应数据变化
export default observer(App)
