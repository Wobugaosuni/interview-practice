const timeout = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('请求超时')
      reject('请求超时')
    }, time)
  })
}

const request = () => {
  return new Promise((resolve, rejece) => {
    const requestTime = Math.round(Math.random() * 10000)
    console.log('requestTime:', requestTime)

    setTimeout(() => {
      resolve('请求成功了')
    }, requestTime)
  })
}

const promiseRace = time => {
  Promise.race([timeout(time), request()])
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

export {
  promiseRace,
}