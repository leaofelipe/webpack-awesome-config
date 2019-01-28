import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './style/main.scss'

const AB = ({ teste }) => {
  return <div>{teste}</div>
}

AB.propTypes = {
  teste: PropTypes.bool
}

const App = <div>React APP</div>

ReactDOM.render(App, document.getElementById('app'))
