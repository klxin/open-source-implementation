/**
 * @description: 实现createStore
 * @param {function} 要获取的函数
 * @return {function, function, function} 返回getState, dispatch, subscribe函数
 */
export function createStore(reducer) {
  let currentState = {}
  let currentListeners = []
  function getState() {
    // 获取store中的状态值
    return currentState
  }
  function subscribe(callback) {
    currentListeners.push(callback)
    return function (callback) {
      let index = currentListeners.findIndex(item => item === callback)
      currentListeners.splice(index, 1)
    }
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
