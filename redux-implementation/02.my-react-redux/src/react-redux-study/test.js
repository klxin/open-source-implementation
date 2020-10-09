import React from 'react'
// 引入react-redux
// import { connect } from 'react-redux'
import { connect } from '../myredux-implementation/my-react-redux'
import { add, asyncAdd } from './countReducer'
// 定义测试react-redux组件
class Test extends React.Component {
  state = {}
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>这是测试react-redux</h1>
        <p>当前计数器为：{this.props.count}</p>
        {/* <button onClick={() => this.props.dispatch({type: 'ADD'})}>增加1</button> */}
        <button onClick={() => this.props.add()}>增加1</button>
        <button onClick={() => this.props.asyncAdd()}>1s后增加1</button>
      </div>
    )
  }
}
// 定义映射状态方法
function mapStateToProps(state) {
  return { count: state }
}
// 定义映射的方法
Test = connect(mapStateToProps, { add, asyncAdd })(Test)
export default Test
