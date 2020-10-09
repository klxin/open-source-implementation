import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// 引入自己的redux
import { createStore } from './myredux-implementation/my-redux'
// 引入reducer
import { countReducer } from './react-redux-study/countReducer'
// 引入自己的my-react-redux
import { Provider } from './myredux-implementation/my-react-redux';
const store = createStore(countReducer)
console.log(store, store.getState())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
