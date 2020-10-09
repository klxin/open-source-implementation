const ADD = 'ADD'
const DECREMENT = 'DECREMENT'
export function countReducer (state = 0, action) {
  switch(action.type) {
    case ADD:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

// 定义action方法
export function add () {
  return {type: ADD}
}

// 定义异步add方法
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 1000);
  }
}
