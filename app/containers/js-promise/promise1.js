// 模仿异步请求
const createPromise = (time, id) => {
  return (lastNum) => new Promise((resolve, reject) => {
    setTimeout(() => {
      const requestNum = Math.round(Math.random() * 10)
      const currentNum = requestNum + lastNum
      // console.log('请求回来了, 请求到的数据:', requestNum)
      // console.log('请求回来了, 处理后数据:', currentNum)
      resolve(currentNum)
    }, time)
  })
}

// 异步请求串行，使用 reduce
const promiseByQueue = (promises) => {
  promises.reduce((accu, current) => {
    return accu.then((num) => current(num))
  }, Promise.resolve(0))
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
  promiseByQueue,
  promiseByAsync
}