/* eslint-disable no-unused-vars */
/**
 * 防抖函数
 * @param {*} fn
 * @param {*} ms
 */
const debounce = (fn, ms = 0) => {
  let timeOutId
  return function (...args) {
    clearTimeout(timeOutId)
    timeOutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

/**
 * 节流函数
 */
const throttle = (fn, wait) => {
  let updateTime = Date.now()
  return (...args) => {
    const now = Date.now()
    if (now - updateTime > wait) {
      fn.apply(this, args)
      updateTime = now
    }
  }
}

/**
 * 深拷贝
 */
const deepCopy = (data) => {
  let dataTmp
  if (data === null || !(typeof data === 'object')) {
    dataTmp = data
  } else {
    dataTmp = data.constructor.name === 'Array' ? [] : {}
    for (const key in data) {
      dataTmp[key] = deepCopy(data[key])
    }
  }
  return dataTmp
}

/**
 * 根据对象属性排序(默认顺排)
 * @param {string} attr: 对象排序字段
 * @param {string} type: 排序方式
 */

const objectSort = (attr, type) => {
  return function (a, b) {
    return type === 'b-a' ? a[attr] - b[attr] : a[attr] - b[attr]
  }
}

/**
 * 按照指定格式格式化时间
 * @param {string, number} time: 时间戳
 * @param {string} type: 时间格式 Y-年; M-月; d-日; H-时; m-分; s-秒;
 */
function definedFormatTime(time, type) {
  const t = new Date(+time)
  const [week, mount, day, year, time_, timezone, zgnzsj] = t.toString().split(' ')
  const mount_ = t.getMonth() + 1
  const M = `${mount_ > 9 ? mount_ : '0' + mount_}`
  const [H, m, s] = time_.split(':')
  const o = { Y: year, M, d: day, H, m, s }
  for (const key in o) {
    if (new RegExp(eval('/(' + key + '+)/')).test(type)) {
      const value = o[key]
      const item = RegExp.$1
      // const arr = type.match(eval('/' + key + '/ig'))
      type = type.replace(item, value.substr(value.length - item.length))
    }
  }
  return type
}

/**
 * 时间格式化 YYYY/MM/dd HH:mm:ss
 * @param {string, number} time: 时间戳
 */
const fixedFormatTime = (time) => {
  const t = new Date(+time)
  const M = t.getMonth() + 1
  const [z, m, d, Y, time_, g, b] = t.toString().split('')
  return `${Y}/${M > 9 ? M : '0' + M}/${d}`
}

/**
 * 根据屏幕比例计算实际尺寸
 */
const resizePX = (num) => {
  const clientWidth = document.documentElement.clientWidth
  const _BASE_WIDTH = window._BASE_WIDTH || 1920
  if (!clientWidth) return num
  return (clientWidth / _BASE_WIDTH) * num
}

export { debounce, throttle, deepCopy, objectSort, definedFormatTime, fixedFormatTime, resizePX }
