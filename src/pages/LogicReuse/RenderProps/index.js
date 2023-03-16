/**
 * Description：
 * **/
import React from 'react'
import WithMouse from './WithMouse'

function ComA(props) {
  return (
    <div>
      X: {props.x}, Y: {props.y}
    </div>
  )
}

function ComB({ x, y }) {
  return (
    <img
      style={{
        width: 48,
        height: 48,
        position: 'absolute',
        left: x - 48,
        top: y - 48,
      }}
      src={require('@/assets/img/logo.jpg')}
      alt=""
    />
  )
}

class RenderProps extends React.Component {
  render() {
    return (
      <div>
        <WithMouse>{({ x, y }) => <ComA x={x} y={y} />}</WithMouse>
        <WithMouse>{(props) => <ComB {...props} />}</WithMouse>
      </div>
    )
  }
}
export default RenderProps
