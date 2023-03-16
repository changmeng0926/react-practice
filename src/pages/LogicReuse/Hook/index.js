/**
 * Description：
 * **/
import UseCoord from './useCoord'
function ComA() {
  const coord = UseCoord()
  return (
    <div>
      X: {coord.x}, Y: {coord.y}
    </div>
  )
}

function ComB() {
  const { x, y } = UseCoord()
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

function Hook() {
  return (
    <div>
      <ComA />
      <ComB />
    </div>
  )
}

export default Hook
