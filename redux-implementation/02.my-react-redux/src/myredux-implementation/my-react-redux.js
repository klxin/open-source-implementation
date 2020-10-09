import React from 'react'
/**
 * @description: connect是一个高阶函数用于将redux状态值传递到组件中
 * @param {function}  mapStateToProps 映射状态的函数
 * @param {object}    mapDispatchToProps 映射dispatch的函数 {方法1, 方法2, ...}
 * @return {function} 返回一个高阶组件
 */
export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrapComponent) => {
    return class ConnectComponent extends React.Component {
      static contextType = MyStoreContext
      constructor(props) {
        super(props)
        this.state = {
          props: {},
        }
      }
      componentDidMount() {
        console.log(this.context, 6666)
        this.update()
      }
      update() {
        // 用于将mapStateToProps, mapDispatchToProps放到this.props中
        const store = this.context
        const stateProps = mapStateToProps(store.getState())
        this.setState({
          props: { ...this.state.props, ...stateProps },
        })
      }
      render() {
        return <WrapComponent {...this.state.props}></WrapComponent>
      }
    }
  }
}

/**
 * @description Provider是一个包裹组件用于传递store
 * @class: Provider
 * @contructor {type}
 */
const MyStoreContext = React.createContext()
export class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
  }
  render() {
    return <MyStoreContext.Provider value={this.store}>{this.props.children}</MyStoreContext.Provider>
  }
}
