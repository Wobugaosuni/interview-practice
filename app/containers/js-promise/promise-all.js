// 模仿异步请求
const createPromise2 = () => {
  const requestTime = Math.round(Math.random() * 10000)
  // console.log('requestTime:', requestTime)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模仿请求成功和失败
      if (requestTime > 3000) {
        resolve(`请求成功:${requestTime}`)
      } else {
        reject('请求失败')
      }
    }, requestTime)
  })
}

/**
 * 1. 当数组里 promise 对象全部变为 resolve 或有 reject 状态的时候，它才会去调用 .then 方法
 * 2. 凡是有 reject 的，直接退出
 */
const promiseAll = promises => {
  let res = []

  return new Promise((resolve, reject) => {
    promises.forEach(item => {
      Promise.resolve(item)
        .then((result) => {
          res.push(result)

          // 最后遍历完了，把数组传下去
          if (res.length === promises.length) {
           resolve(res)
          }
        }, (error) => {
          // 遍历过程中遇到错误，中断流程
          reject(error)
        })
    })
  })
}

export {
  createPromise2,
  promiseAll
}