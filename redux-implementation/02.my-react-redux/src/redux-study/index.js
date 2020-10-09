// redux 一个专业的状态管理工具 可以搭配react anguler vue等任意框架使用
import { createStore } from 'redux'
// 定义常量便于管理
const ADD_COUNT = 'ADD_COUNT'
const INCRE_COUNT = 'INCRE_COUNT'
// 定义一个count计算器的reducer
// reducer接受2个参数 第一个参数是state状态 第二个是action
function countReducer(state = 0, action) {
  switch (action.type) {
    case ADD_COUNT:
      return state + 1
    case INCRE_COUNT:
      return state - 1
    default:
      return state
  }
}
// createStore方法需要接受一个reducer用于生成一个store
export const store = createStore(countReducer)
