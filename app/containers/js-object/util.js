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

/**
 * param可能值：不传，直接返回对象
 */
export const find = function (obj, param, df) {
  // 不是对象的话，直接返回默认值
  if (!isObject(obj)) return df

  if (!param) return obj

  // 要找的属性数组
  const paramArr = param.split('.')

  const currentKey = paramArr.shift()
  if (!(currentKey in obj)) return df

  // 需要继续查找
  if (paramArr.length) {
    return find(obj[currentKey], paramArr.join(''), df)
  } else {
    // 没有长度，遍历完了
    return obj[currentKey]
  }
}

export const findAge = function (obj, name) {
  // 先扁平化对象
  const arr = [{name: obj.name, age: obj.age}]
  if (obj.child) {
    add(obj.child, obj.name)
  }
  function add(children, father) {
    children.forEach(item => {
      arr.push({
        name: item.name,
        age: item.age,
        parent: father
      })
      if (item.child) add(item.child, item.name)
    })
  }
  // console.log('arr:', arr)

  const result = arr.find(item => item.name === name)
  if (result) {
    return result.age
  } else {
    return '查无此人'
  }
}