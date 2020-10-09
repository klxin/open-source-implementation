// redux 一个专业的状态管理工具 可以搭配react anguler vue等任意框架使用
// import { createStore } from 'redux'
import { createStore } from '../myredux-implementation/my-redux'
// 定义常量便于管理
const ADD_COUNT = 'ADD_COUNT'
const INCRE_COUNT = 'INCRE_COUNT'
// 定义一个count计算器的reducer
// reducer接受2个参数 第一个参数是state状态 第二个是action
function countReducer (state = 0, action) {
  switch(action.type) {
    case ADD_COUNT:
      return state + 1
    case INCRE_COUNT:
      return state - 1
    default:
      return state
  }
}
// createStore方法需要接受一个reducer用于生成一个store
const store = createStore(countReducer)
console.log(store)
// __proto__上有
// dispath方法 用于派发 reducer
// getState方法 用于获取state状态
// subscribe订阅
store.dispatch({type: ADD_COUNT})
store.dispatch({type: ADD_COUNT})
console.log(store.getState()) // 2

// 订阅说明
// store.subscribe()的返回值用于取消订阅
const unsubscribe = store.subscribe(function () {
  // 订阅store 只要state状态改变了都可以获取到
  // 注意：先订阅 订阅后派发的任务 让state改变的才能监听得到
  console.log(store.getState())
})
store.dispatch({type: ADD_COUNT})
store.dispatch({type: ADD_COUNT})

unsubscribe()
// 取消订阅后 再次派发就获取不到了
store.dispatch({type: ADD_COUNT})
store.dispatch({type: ADD_COUNT})
// 需要手动获取
console.log(store.getState()) // 66
