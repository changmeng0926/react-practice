/**
 * Description：
 * **/
import React from 'react'
import ImgFollow from './imgFollow'

class ClassComponent extends React.Component {
  state = { x: 0, y: 0 }

  handMouseMove = (e) => {
    this.setState({
      x: e.pageX,
      y: e.pageY,
    })
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handMouseMove)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handMouseMove)
  }

  render() {
    return (
      <div>
        X: {this.state.x}, Y: {this.state.y}
        <ImgFollow></ImgFollow>
      </div>
    )
  }
}

export default ClassComponent
