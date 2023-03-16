/**
 * Description：
 * **/
import React from 'react'

const HocComponent = (Com) => {
  class HigherOrderFunction extends React.Component {
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
      return <Com {...this.state} />
    }
  }
  return HigherOrderFunction
}

export default HocComponent
