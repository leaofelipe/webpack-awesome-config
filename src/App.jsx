import React from 'react'
import ReactDOM from 'react-dom'
import EmptyComponent from './components/EmptyComponent'
import './style/main.scss'

const App = () => (
  <div>
    <h1>Webpack Awesome Config</h1>
    <p>{`default key: ${process.env.APP_KEY}`}</p>
    <EmptyComponent />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
