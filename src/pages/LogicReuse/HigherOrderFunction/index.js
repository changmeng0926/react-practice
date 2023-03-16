/**
 * Description：
 * **/
import HocComponent from './HocComponent'

const HocB = HocComponent(ComB)
const HocC = HocComponent(ComC)

function ComA() {
  return (
    <div>
      <HocB />
      <HocC />
    </div>
  )
}
function ComB(props) {
  return (
    <div>
      X: {props.x}, Y: {props.y}
    </div>
  )
}

function ComC(props) {
  return (
    <img
      style={{
        width: '48px',
        height: '48px',
        position: 'absolute',
        left: props.x - 48,
        top: props.y - 48,
      }}
      src={require('@/assets/img/logo.jpg')}
      alt=""
    />
  )
}

export default ComA
