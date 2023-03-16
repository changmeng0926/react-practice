import { useState, useEffect } from 'react'

function UseCoord() {
  const [coord, setCoord] = useState({ x: 0, y: 0 })

  function mouseMoveHandler(e) {
    setCoord({
      x: e.pageX,
      y: e.pageY,
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler)
    return () => document.removeEventListener('mousemove', mouseMoveHandler)
  }, [])

  return coord
}

export default UseCoord
