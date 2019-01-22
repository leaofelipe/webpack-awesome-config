import React from 'react'

export default class extends React.Component {
  state = {
    title: 'Start'
  }
  
  render () {
    return (
      <div>
        {this.state.title}
      </div>
    )
  }
}