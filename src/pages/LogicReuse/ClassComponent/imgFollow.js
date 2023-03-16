/**
 * Description：
 * **/
import React from 'react'

class ImgFollow extends React.Component {
  state = {
    x: 0,
    y: 0,
  }

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
      <img
        style={{
          width: '48px',
          height: '48px',
          position: 'absolute',
          left: this.state.x - 48,
          top: this.state.y - 48,
        }}
        src={require('@/assets/img/logo.jpg')}
        alt=""
      />
    )
  }
}
export default ImgFollow
