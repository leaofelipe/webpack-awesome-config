console.log('It Works')
import React from 'react'
import ReactDOM from 'react-dom'
import Start from './components/start'
import './style/main.scss'

const App = (
  <div>
    React APP
    <Start />
  </div>
)

ReactDOM.render(App, document.getElementById('app'))