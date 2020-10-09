import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
// 引入myredux 测试功能
// import'./redux-study/01.redux的基本使用';
import TestReduxCom, {store} from './redux-study/02.redux配合组件渲染';
store.subscribe(initRenderDOM)
initRenderDOM()
function initRenderDOM () {
  ReactDOM.render(
    <React.StrictMode>
        <TestReduxCom />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
