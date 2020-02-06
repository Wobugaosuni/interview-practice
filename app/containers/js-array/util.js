export function flattenArr(arr) {
  return arr.reduce((accu, current) => {
    return accu.concat(Array.isArray(current) ? flattenArr(current) : current)
  }, [])
}

export function flattenArr2(arr) {
  // 如果子元素还是数组，继续循环
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  console.log(arr)
  return arr
}

export function flattenArr3(arr) {
  const result = arr.flat(Infinity)
  console.log('result:', result)

  return result
}

export function flattenArrAssignLevel(arr, level) {
  const newArr = arr.flat(level)

  console.log('flattenArrAssignLevel:', newArr)
}

export function setArray(arr) {
  const flatArr = flattenArr2(arr)

  const newArr = [...new Set(flatArr)]

  console.log('去重后数组：', newArr)
}

export function shallowCopy() {
  const arr = [{a:1}, 3]

  const data = arr.slice(0)
  data[0].a = 2

  console.log('原数组也改变了：', arr)

  return data
}
export function shallowCopy2() {
  const arr = [{a:1}, 3]

  const data = [].concat(arr)
  data[0].a = 2

  console.log('原数组也改变了：', arr)

  return data
}
export function shallowCopy3() {
  const arr = [{a:1}, 3]

  const data = [...arr]
  data[0].a = 2

  console.log('原数组也改变了：', arr)

  return data
}

export function deepCopy() {
  const arr = [{a:1}, 3]

  const data = JSON.parse(JSON.stringify(arr))
  data[0].a = 2

  console.log('原数组没改变：', arr)
  console.log('拷贝数组改变：', data)

  return data
}