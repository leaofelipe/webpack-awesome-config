import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.scss'

import imageJPG from './images/teste.jpg'
import imagePNG from './images/logo-on-white-bg.png'
import imageSVG from './images/download.svg'

const App = (
  <div>
    React APP
    <img src={imageJPG} />
    <img src={imagePNG} />
    <img src={imageSVG} />
  </div>
)

ReactDOM.render(App, document.getElementById('app'))