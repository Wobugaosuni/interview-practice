// 模仿异步请求
const createPromise = (time, id) => {
  return (lastNum) => new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestNum = Math.round(Math.random() * 10)
      const currentNum = requestNum + lastNum
      let result = true

      // 模仿请求成功和失败
      if (requestNum > 3) {
        result = true
      } else {
        result = false
      }
      // console.log('随机数据:', requestNum)
      // console.log('请求回来了, 处理后数据:', currentNum)
      // 返回处理结果
      resolve({
        status: result,
        content: currentNum
      })
    }, time)
  })
}

// 多个异步请求遍历处理
const arrShift = (arr, data) => {
  if (arr.length) {
    const current = arr.shift()
    current(data).then(result => {
      console.log('result:', result)
      if (result.status) {
        // 请求成功，继续下个请求
        arrShift(arr, result.content)
      } else {
        // 请求失败，不继续了
        console.log('请求失败')
      }
    })
  }
}

// 异步请求串行，使用 reduce
const promiseByReduce = (promises) => {
  // 请求失败不能中断
  promises.reduce((accu, current) => {
    return accu
      .then((result) => {
        console.log('result:', result)
        current(result.content)
      })
      .catch(() => console.log('请求失败'))
  }, Promise.resolve(0))
}

const promiseByShift = (promises) => {
  // 请求失败中断
  arrShift(promises, 0) // 0是初始值
}

// 使用async
const promiseByAsync = async (promises) => {
  // 新开了一个作用域，需要在函数前加 async
  // promises.forEach(async (item) => await item())

  for (let item of promises) {
    await item()
  }
}

export {
  createPromise,
  promiseByReduce,
  promiseByShift,
  promiseByAsync
}