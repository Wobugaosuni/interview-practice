import {STYLE} from '../static'

// 模仿异步请求，成功
export const myAjax = (time) => {
  const requestTime = time || Math.round(Math.random() * 10000)
  console.log('请求中。。。')

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`请求成功:${requestTime}`)
    }, requestTime)
  })
}

// 模仿异步请求，随机成功失败
export const myAjaxRandom = () => {
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

// 利用 canvas 计算文本的宽度
const ctx = document.createElement('canvas').getContext('2d')

// 获取文字的宽度
export const getTextWidth = function(text, fontSize) {
  const mT = ctx.measureText(text)
  // mT.font = '22px ' + STYLE.FONT_FAMILY
  // console.log('mT:', mT)

  return mT.width
}
