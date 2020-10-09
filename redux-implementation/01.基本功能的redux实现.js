/**
 * @description: 实现createStore
 * @param {function} 要获取的函数
 * @return {function, function, function} 返回getState, dispatch, subscribe函数
 */
function createStore(reducer) {
  let currentState = {}
  let currentListeners = []
  function getState() {
    // 获取store中的状态值
    return currentState
  }
  function subscribe(callback) {
    currentListeners.push(callback)
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    // 订阅者更新 执行subscribe中的回调
    currentListeners.forEach((cb) => cb())
    return action
  }
  // 默认自己派发一次初始数据
  dispatch({ type: '@@redux/INIT' })
  return { getState, subscribe, dispatch }
}

// 测试使用自己封装的redux
const ADD_CONUT = 'ADD_CONUT'
function reducerCounter(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD_CONUT:
      return { count: state.count + action.payload }
    default:
      return { count: 0 }
  }
}
const store = createStore(reducerCounter)
console.log(store.getState())
// 派发
store.dispatch({ type: ADD_CONUT, payload: 2 })
console.log(store.getState(), 'getState获取')
// 监听
store.subscribe(function () {
  console.log(store.getState(), 'subscribe订阅')
})
