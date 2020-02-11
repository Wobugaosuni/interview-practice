const isObject = o => Object.prototype.toString.call(o) === '[object Object]'

const type = o => Object.prototype.toString.call(o).slice(8, -1)

/**
 * 深拷贝对象（对象里可能有数组，数组里可能有对象）
 */
export function clone(obj) {
  let result

  if (type(obj) === 'Array') {
    result = []
  } else if (type(obj) === 'Object') {
    result = {}
  } else {
    return obj
  }

  // 循环，obj有可能是数组或者对象
  for (let i in obj) {
    const val = obj[i]

    if (type(val) === 'Object' || type(val) === 'Array') {
      // 需要继续遍历，拿到基本值
      result[i] = clone(val)
    } else {
      // 基本值或者函数、正则、日期之类的
      result[i] = val
    }
  }

  return result
}

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
  // console.log('arr:', JSON.stringify(arr, null, 2))
  // console.log('tree:', convert(arr))

  const result = arr.find(item => item.name === name)
  if (result) {
    return result.age
  } else {
    return '查无此人'
  }
}

function tree(arr) {
  // 深拷贝一个数组，避免干扰
  const data = JSON.parse(JSON.stringify(arr))
  // 作一个hash
  const obj = {}

  data.forEach(item => {
    // 是子节点
    if (item.parent) {
      if (!obj[item.parent]) obj[item.parent] = []

      // 有爸爸的
      obj[item.parent].push(item)
    }
  })

  // 挑选父节点
  const fathers = data.filter(item => !item.parent)
  fathers.forEach(item => {
    item.child = obj[item.name]
  })

  return fathers
}

function convert(list) {
	const res = []
	const map = list.reduce((accu, v) => {
    // v是数组里的对象，引用类型
    accu[v.name] = v

    // 坑啊啊啊啊啊啊！！记得return accu
    return accu
  }, {})

	for (const item of list) {
    // 没有父节点
		if (!item.parent) {
			res.push(item)
			continue
		}
    // 有父节点
		if (item.parent in map) {
			const parent = map[item.parent]
			parent.children = parent.children || []
			parent.children.push(item)
		}
	}
	return res
}