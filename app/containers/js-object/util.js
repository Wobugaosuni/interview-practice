const isObject = o => Object.prototype.toString.call(o) === '[object Object]'

export const deepCloneObj = function (obj) {
  const result = {}

  for (let key in obj) {
    const value = obj[key]

    if (isObject(value)) {
      // 继续循坏
      result[key] = deepCloneObj(value)
    } else {
      result[key] = value
    }
  }

  // console.log('result:', result)
  return result
}