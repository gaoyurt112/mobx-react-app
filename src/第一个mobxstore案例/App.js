//引入store实例
import counterStore from "./store/Counter"
//引入视图更新的关键方法
import { observer } from 'mobx-react-lite'

function App () {
  return (
    <>
      {/* 使用store中的数据 */}
      {counterStore.count}
      <div>
        {/* 修改store中的数据 */}
        <button onClick={counterStore.addCount}>点击</button>
      </div>
    </>
  )
}
// 使用observer方法包裹组件，使其响应数据变化
export default observer(App)
