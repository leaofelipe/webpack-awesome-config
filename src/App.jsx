import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.scss'

const App = () => (
  <div>
    <h1>Webpack Awesome Config</h1>
    <p>{`version: ${process.env.APP_VERSION}`}</p>
    <p>{`default key: ${process.env.APP_KEY}`}</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
